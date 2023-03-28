import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        website : ""
    });

    const {name, username, email, phone, website} = user;
    const onInputChange = (e) =>{
        setUser({...user, [e.target.name] : e.target.value})
    }

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/user", user);
        navigate('/');
    }
  return (
    <div className="container py-4">
      <div className="card w-75 mx-auto shadow p-5">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Name
              </label>
              <input type="text" className="form-control" name="name" value={name} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Username
              </label>
              <input type="text" className="form-control" name="username" value={username} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email
              </label>
              <input type="text" className="form-control" name="email" value={email} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Phone
              </label>
              <input type="text" className="form-control" name="phone" value={phone} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Website
              </label>
              <input type="text" className="form-control" name="website" value={website} onChange={onInputChange} />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
