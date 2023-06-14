import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Signup } from "./Signup"
import { Login } from "./Login"
import { Welcome } from "./Welcome"
import { LogoutLink } from "./LogoutLink"
import { CreatePaymentInformation } from './CreatePaymentInfo';
import { CreateDonation } from './CreateDonation'
import { Routes, Route } from "react-router-dom";
import { About } from "./About.jsx";
import { ShowUser } from "./ShowUser.jsx";
import Container from 'react-bootstrap/Container';
// import { About } from "./About"

export function Content() {
  return (
    
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logoutlink" element={<LogoutLink />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/createpaymentinformation" element={<CreatePaymentInformation />} />
        <Route path="/createdonation" element={<CreateDonation />} />
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<ShowUser />}/>
      </Routes>
    </div>
    
  )
}
