import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function RegistrationForm() {
    const changeHandler = (e) => {
        const el = e.target
        this.setState({
            [el.name]: el.type === "file" ? el.files[0] : el.value
        })
    }
    const submitBaner = (e) => {
        e.preventDefault()
        const bodyFormData = new FormData(e.target);
        let formObject=Object.fromEntries(bodyFormData.entries());
        axios.post('http://127.0.0.1:4000/upload', bodyFormData)
        e.target.reset()
    }
    return (
        <form onSubmit={submitBaner}>
            <div>
                <label className="form-label">Full Name</label><br/>
                <input type="text" name="fullname" className="form-control" placeholder="Full Name"/>
            </div><br/>
            <div>
                <label className="form-label">Bio</label>
                <textarea name="bio" type="text" className="form-control" rows={4} placeholder='Type here...'/>
            </div><br/>
            <div>
                <label className="form-label">Profile Picture</label>
                <input type="file" name="urlpromo" className="form-control"/>
            </div>
            <br/>
            <center><input type="submit" className="btn btn-primary" value="Upload" /></center>
        </form>
    );
}

export default RegistrationForm;