
export function NewDonation(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDonation(params, () =>event.target.reset());
  }
  return (
    <div>
        <h1>New Donation </h1>
        <form onSubmit={handleSubmit}>
          <div>
            Amount: <input name="amount" type="text" />
          </div>
          <div>
            Message: <input name="message" type="text"/>
          </div>
          <div>
            Plan Type:  
            <input type="radio" id="rannual" name="plan_type" value="annual"/>
            <label htmlFor="rannual"> Annual</label>
            <input type="radio" id="rmonthly" name="plan_type" value="monthly"/>
            <label htmlFor="rmonthly">Monthly</label>
            <input type="radio" id="rone_time" name="plan_type" value="one_time"/>
            <label htmlFor="rone_time">One Time</label>
          </div>
          <div>
            Date: <input name="date" type="date"/>
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}