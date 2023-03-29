import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/user");
    setUsers(result.data)
    // console.log(result, "asd");
  };

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:3001/user/${id}`);
    loadUser();
  }
  return (
    <div className="container py-4">
      <table className="table table-striped table-hover">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
            {users.map(( user, index ) => {
            return (
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link className="btn btn-outline-primary me-2" to={`/user/details/${user.id}`}>Details</Link>
                    <Link className="btn btn-outline-success me-2" to={`/user/edit/${user.id}`}>Edit</Link>
                    <Link className="btn btn-outline-danger" onClick={()=>{deleteUser(user.id)}}>Delete</Link>
                </td>
                </tr>
            );
            })}
            {/* {users.map((user,index=>{
                return(
                    <th scope="row">{index+1}</th>
                    <tr>{user.name}</tr>
                    <tr>{user.username}</tr>
                    <tr>{user.email}</tr>
                )
            })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
