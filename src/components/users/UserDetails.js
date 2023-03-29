import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDetails = () => {

    const {id} = useParams();
    const [user, SetUser] = useState({
        name : '',
        username : '',
        email : '',
        phone : '',
        website : '',
    });

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3001/user/${id}`);
        SetUser(result.data);
    }



  return (
    <div className="container py-4">
        <Link className="btn btn-primary" to="/">BackToHome</Link>
        <h1 className="display-1">UserID : {id}</h1>
        
        
      <div className="list-group">
        <label className="list-group-item d-flex gap-2">
          {user.name}
        </label>
        <label className="list-group-item d-flex gap-2">
          {user.username}
        </label>
        <label className="list-group-item d-flex gap-2">
          {user.email}
        </label>
        <label className="list-group-item d-flex gap-2">
          {user.phone}
        </label>
        <label className="list-group-item d-flex gap-2">
          {user.website}
        </label>
      </div>
    </div>
  );
};

export default UserDetails;
