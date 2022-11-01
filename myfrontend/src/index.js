import React from 'react';
import { createRoot } from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.css';
import NavComponent from './Nav';
import PeopleComponent from './PeopleData';
import ArticleComponent from './SpaceData';
import RegistrationForm from './Form';
const maincontainer = document.getElementById('root')
const mainroot = createRoot(maincontainer)


class MainComponent extends React.Component{
    render(){
        return (
            <div>
                <NavComponent/>
                <br/>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <h2 className='text-center'>Enter your details</h2>
                            <RegistrationForm/>
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-6'>
                        <h2 className='text-center'>External Data from SpaceData API</h2>
                            <ArticleComponent/>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <h2 className='text-center'>Users in our system</h2>
                <div className='container pt-5 pb-5'>
                    <PeopleComponent/>
                </div>
            </div>
        )
    }
}

mainroot.render(<MainComponent />);