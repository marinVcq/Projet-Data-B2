import {db} from '../db.js'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const register = (req, res) => {

  console.log("from register controller\n");
  const q = "SELECT * FROM employee WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO employee(`surname`,`email`,`password`) VALUES (?)";
    const values = [req.body.surname, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};
  
export const login = (req, res) => {
  console.log("from login controller\n");

  console.log(`email ${req.body.email} password: ${req.body.password}`);

  //CHECK USER
  const q = "SELECT * FROM employee WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    console.log("Query result:", data); 

    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json(err);
    }
    if (data.length === 0) return res.status(404).json("User not found!");

    console.log("password from db" + data[0].password);

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password.trim(),
      data[0].password.trim()
    );

    console.log("password from db" + data[0].password);

    console.log("iscorectpass: " + isPasswordCorrect );


    if (!isPasswordCorrect){
      return res.status(400).json("Wrong email or password!");
    }else{
      console.log("mot de passe correcte");

      console.log("login exist status 200");
      const token = jwt.sign({ id: data[0].idemployee }, "jwtkey");
      const { password, ...other } = data[0];

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);      
    }
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};