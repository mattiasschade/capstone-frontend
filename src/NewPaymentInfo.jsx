
export function NewPaymentInfo(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePaymentInformation(params, () =>event.target.reset());
  }
  return (
    <div>
        <h1>New Paymnet Information</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Card Number: <input name="card_number" type="text" />
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