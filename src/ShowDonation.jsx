import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function ShowDonations () {
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
    <div id="carted-products-index">
      <p>hello</p>
      {user.donations.map(donation => (
        <div key={donation.id}>
          <p>id: {donation.id}</p>
          <p>name: {donation.amount}</p>
          <p>price: {donation.plan_type}</p>
          <p>quantity: {donation.quantity}</p>

          <hr />
        </div>
      ))}
    </div>
  )
}