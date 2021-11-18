import React from 'react';
import Tree from './Tree';
import './App.css';

function Navbar(){
    return(
        <div className="Navbar">
          <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet"/>
          <h4 style = {{ paddingLeft : "10px"}} >Data Explorer   </h4>
          <h3 style = {{ paddingLeft : "10px"}} >128.51 GB</h3>
          <Tree/>
        </div>
    );
}

export default Navbar;