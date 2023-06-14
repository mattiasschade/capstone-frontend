import axios from "axios";
import { useState } from "react";

import "./Signup.css"

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 className="col-12">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="col-13">
          First Name: <input name="first_name" type="text" />
          </div>
        </div>
        <div className="col-13">
          Last Name: <input name="last_name" type="text" />
        </div>
        <div className="col-13">
          Email: <input name="email" type="email" />
        </div>
        <div className="col-13">
          Password: <input name="password" type="password" />
        </div>
        <div className="col-13">
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <br/>
        <button type="submit" className="text-white">Signup</button>
      </form>
      <br/>
      <br/>
    </div>
  );
}