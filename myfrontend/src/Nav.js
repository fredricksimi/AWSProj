import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NavComponent extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <p className="navbar-brand">Navbar</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavComponent;