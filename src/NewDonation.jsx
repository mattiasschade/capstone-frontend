
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
           <p> Please select your gift amount: </p>
           <br/>
           <div className="container-sm">
           <div className="row">
            <div className="col">
            <input type="radio" className="btn-check" name="amount" id="50" value="50" autoComplete="off"/>
            <label className="btn btn-light" htmlFor="50">$50</label><p>Provides Medical Supplies</p>
            </div> 
            <div className="col">
            <input type="radio" className="btn-check" name="amount" id="100" value="100" autoComplete="off"/>
            <label className="btn btn-light" htmlFor="100">$100</label><p>Provides Fire Proof Gloves</p>
            </div> 
            <div className="col">
            <input type="radio" className="btn-check" name="amount" id="250" value="250" autoComplete="off"/>
            <label className="btn btn-light" htmlFor="250">$250</label><p>Provides 1 Pair of Fire Boots</p>
            </div> 
            <div className="col">
            <input type="radio" className="btn-check" name="amount" id="450" value="450" autoComplete="off"/>
            <label className="btn btn-light" htmlFor="450">$450</label><p>Provides 1 Helmet</p>
            </div> 
            <div className="col">
            <input type="radio" className="btn-check" name="amount" id="1000" value="1000" autoComplete="off"/>
            <label className="btn btn-light" htmlFor="1000">$1000</label><p>Provides 1 month of Fuel for Emergency Vehicles</p>
            </div>
            <div>
             Custom Amount: <input name="amount" type="text"/>
            </div>
            </div>
          </div>
          </div>
          <br/>
          <div>
            Message: <input name="message" type="text"/>
          </div>
          <br/>
          <div>
            Plan Type:  
            <input type="radio" id="rannual" name="plan_type" value="annual"/>
            <label htmlFor="rannual"> Annual</label>
            <input type="radio" id="rmonthly" name="plan_type" value="monthly"/>
            <label htmlFor="rmonthly">Monthly</label>
            <input type="radio" id="rone_time" name="plan_type" value="one_time"/>
            <label htmlFor="rone_time">One Time</label>
          </div>
          <br/>
          <div>
            Date: <input name="date" type="date"/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}