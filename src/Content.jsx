import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Signup } from "./Signup"
import { Login } from "./Login"
import { Welcome } from "./Welcome"
import { LogoutLink } from "./LogoutLink"
import { CreatePaymentInformation } from './CreatePaymentInfo';

export function Content() {
  return (
    <div>
    <Signup />
    <Login />
    <LogoutLink />
    <Welcome />
    <CreatePaymentInformation />
    </div>
  )
}
