import axios from "axios";
import { useState, useEffect } from "react";
import { NewPaymentInfo } from "./NewPaymentInfo";

export function CreatePaymentInformation() {
  const [paymentInformation, setPaymentInformation] = useState([]);

    const handleCreatePaymentInformation = (params, successCallback) => {
           console.log("handleCreatePhoto", params);
           axios.post("http://localhost:3000/payment_infos.json", params).then((response) => {
             setPaymentInformation([...paymentInformation, response.data]);
             successCallback();
           });
         };
  return (
    <div>
      <NewPaymentInfo onCreatePaymentInformation={handleCreatePaymentInformation} />
    </div>
    )
}