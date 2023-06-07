import axios from "axios";
import { useState } from "react";
import { NewDonation} from "./NewDonation";

export function CreateDonation() {
  const [paymentInformation, setPaymentInformation] = useState([]);

    const handleCreateDonation = (params, successCallback) => {
           console.log("handleCreateDonation", params);
           axios.post("http://localhost:3000/donations.json", params).then((response) => {
             setPaymentInformation([...paymentInformation, response.data]);
             successCallback();
           });
         };
  return (
    <div>
      <NewDonation onCreateDonation={handleCreateDonation} />
    </div>
    )
}