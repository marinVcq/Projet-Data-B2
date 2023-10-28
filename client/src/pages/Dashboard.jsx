import React from 'react'
import {Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
       <h1 className='page-title'>Dashboard</h1>

       <section className='dashboard-navigation'>
            <Link to='/ressources' className='navbar-link'>Global Ressources</Link>
            <Link to='/projects' className='navbar-link'>Projects</Link>
            <Link to='/inventory' className='navbar-link'>Inventory</Link>
            <Link to='/reservation' className='navbar-link'>Reservation</Link>
       </section>

       <section className='panels-container'>

            <div className='user-panel'>
                <h2 className='user-panel-title'>Your Panel</h2>

                <div className='information-container'>
                    <p className='next-meeting'><span>Next Meeting:</span> 06/11/2023</p>
                    <p className='reservation'><span>Reservation:</span> NaN</p>
                    <p className='mail-box'><span>Mailbox:</span> 1 Message</p>
                </div>
            </div>

            <div className='search-container'>

                <h2>Search form</h2>

                <p className='search-guide'>
                    The dashboard search form empowers users to seamlessly explore multiple database tables. By selecting a table and entering a search term, users can swiftly 
                    retrieve relevant information. The intuitive interface and dynamic updates enhance the search experience, offering a user-friendly gateway
                    to explore and interact with diverse datasets.
                </p>

                <form className='search-form'>

                    <div className='input-container'>
                        <label for="tableName">Select a search topic:</label>
                        <select id="tableName" name="tableName" className='input-field'>
                            <option value="labo">Labo</option>
                            <option value="employee">Employee</option>
                            <option value="project">Project</option>
                        </select>                    
                    </div>


                    <div className='input-container'>
                        <label for="filterName">Filter by:</label>
                        <select id="filterName" name="filterName" className='input-field'>
                            <option value="labo">Labo</option>
                            <option value="employee">Employee</option>
                            <option value="project">Project</option>
                        </select>                    
                    </div>

                    <div className='input-container'>
                        <label for="valueName">Value:</label>
                        <input type='text' name="filterValue" className='input-field'></input>                    
                    </div>

                    <div className='buttons-container'>
                        <button className='search-btn'>Search</button>
                    </div>

                </form>
            </div> 

       </section>

       <section className='result-container'>
        <h2>Result</h2>
       </section>

       
    </div>
  )
}

export default Dashboard