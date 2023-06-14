import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function ShowUser() {
  const [user, setUser] = useState({})
  const params = useParams();
  const getShowUser = () => {
    console.log(params.id);
    console.log("getting user");
    axios.get("http://localhost:3000/users.json").then(response => {
      console.log(response.data)
      setUser(response.data)
    })
  }

  useEffect(getShowUser, [])
  return (
    <div>
      <br/>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Email: {user.email}</p>
      <br/>
    </div>
  )
}