import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

class PeopleComponent extends React.Component{
    state = {
        people: []
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:4000/getusers')
            .then((res) => {
                this.setState({people: res.data})
            })
        }

    render(){
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Bio</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.people
                    .map((person, index) =>
                        <tr>
                            <th key={person.id}>{index+1}</th>
                            <td><img src={`http://127.0.0.1:4000/${person.profilePhoto}`} className="img-fluid" style={{width: 70 + 'px', height: 70 + 'px', borderRadius: 50 + 'px'}}/></td>
                            <td>{person.fullname}</td>
                            <td>{person.bio}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default PeopleComponent;