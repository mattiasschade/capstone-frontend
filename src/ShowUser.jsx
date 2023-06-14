import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ShowPaymentInfo } from "./ShowPaymentInfo";

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
    <div className="container-sm text-left" style={{textAlign:"left"}}>
      <br/>
      <div className="row text-left">
        <div className="col-2 text-left">
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="col-3 text-left">
          <p>Card Number: {user.card_number}</p>
          <p>Expiration: {user.expiration}</p>
          <p>CVV: {user.cvv}</p>
        </div>
      </div>
     
      <br/>
    </div>
  )
}