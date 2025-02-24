import React, {useState} from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './Navbar.css'

export default function Navbar(props) {
    const [toggleFilter, settoggleFilter] = useState(false);

    function handleDisplayToggle(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleGroupValue(e.target.value);
        }
    }
    function handleOrderingValue(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleOrderValue(e.target.value);
        }
    }
    
  return (
    <>
        <section className="nav">
            <div className="nav-container">
                <div>
                    <div className="nav-disp-btn" onClick={handleDisplayToggle}>
                        <div className="nav-disp-icon nav-disp-filter">
                        <TuneIcon sx={{fontSize: "18px"}} />
                        </div>
                        <div className="nav-disp-heading">
                            Display
                        </div>
                        <div className="nav-disp-icon nav-disp-drop">
                        <ArrowDropDownIcon />                        
                        </div>
                    </div>
                    <div className={toggleFilter ? "nav-disp-dropdown nav-disp-dropdown-show" : "nav-disp-dropdown"}>
                        <div className="nav-disp-filters">
                            <div className="nav-dropdown-category">
                                Grouping
                            </div>
                            <div className="nav-dropdown-selector">
                                <select value={props.groupValue} onChange={handleDisplayToggle} className='nav-selector' name="grouping" id="">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="nav-disp-filters">
                            <div className="nav-dropdown-category">
                                Ordering
                            </div>
                            <div className="nav-dropdown-selector">
                                <select value={props.orderValue} onChange={handleOrderingValue} className='nav-selector' name="grouping" id="">
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}