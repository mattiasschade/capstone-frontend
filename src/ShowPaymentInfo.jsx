import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function ShowPaymentInfo() {
  const [user, setUser] = useState({})
  const params = useParams();
  const getShowUser = () => {
    console.log(params.id);
    console.log("getting user");
    axios.get("http://localhost:3000/payment_infos.json").then(response => {
      console.log(response.data)
      setUser(response.data)
    })
  }

  useEffect(getShowUser, [])
  return (
    <div>
      <br/>
      <p>Card Number: {user.payment_info.card_number}</p>
      <p>Last Name: {user.payment_info.expiration}</p>
      <p>Email: {user.payment_info.cvv}</p>
      <br/>
    </div>
  )
}