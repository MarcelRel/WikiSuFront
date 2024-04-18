import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

export const App = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to='/'><img src="/GXO_LOGO.png" alt=""/></Link>
                </div>
                {/*<div className="search_bar">*/}
                {/*    <form action="">*/}
                {/*        <input type="text"/>*/}
                {/*        <button>Submit</button>*/}
                {/*    </form>*/}
                {/*</div>*/}
                <div className="user_menu">
                    <Link to="/settings"><img src="/settings.png" alt=""/></Link>
                    <Link to="/logout"><img src="/logout.png" alt=""/></Link>
                </div>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to="/helpdesk">HelpDesk</Link></li>
                    <li><Link to="/quries">Queries</Link></li>
                    <li><Link to="/wow">WayOfWorking</Link></li>
                    <li><Link to="/p1">P1-Postępowanie</Link></li>
                    <li><Link to="/su-wiki">SU-Wiki</Link></li>
                    <li><Link to="/wamas">Wamas</Link></li>
                </ul>
            </div>
        </>
    );
}

