import React from 'react'
import "./SearchBar.css"

const SearchBar = () => {
  return (
      
   

    <div className="row height d-flex justify-content-center align-items-center">

      <div className="col-md-8">

        <div className="search">          
            <i className="fa fa-search"></i>
            <input type="text" className="form-control" placeholder="Search cafe ....."/>
          
          <button className="btn btn-primary">Search</button>
        </div>
        
      </div>
      
    </div>

  )
}

export default SearchBar