import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown() {

  return (
    
    <div class="dropdown">
      <button class="dropbtn">Dropdown 
        <i class="fa fa-caret-down"></i>
      </button>

      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div> 
    
  );
}

export default Dropdown;