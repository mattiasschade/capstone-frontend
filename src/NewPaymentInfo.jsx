export function NewPaymentInfo() {
  return (
    <div>
        <h1>New Paymnet Information</h1>
        <form>
          <div>
            Card Number: <input name="cardNumber" type="text" />
          </div>
          <div>
            expiration: <input name="expiration" type="text"/>
          </div>
          <div>
            CVV: <input name="cvv" type="text"/>
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}