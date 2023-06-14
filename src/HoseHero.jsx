
import Card from 'react-bootstrap/Card';
import img from "./assets/hose_squad.jpg";
import "./HoseHero.css";
import { HeartPulseFill, CurrencyDollar, LightbulbFill} from "react-bootstrap-icons";


export function HoseHero() {
  return (
  
    <Card className="bg-dark text-white">
      <Card.Img src={img} alt="Squad" />
      <Card.Body className="card-img-overlay">
          <Card.Text className="card-title"></Card.Text>
          <br/>
          <br/>
          <Card.Title className="card-title"><h1><u>GET INVOLVED</u></h1></Card.Title>
          <Card.Text className="card-text container-sm">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="row">
            <div className="col">
            <HeartPulseFill size={116}/>
            </div>
            <div className="col">
            <CurrencyDollar size={116}/>
            </div>
            <div className="col">
              <LightbulbFill size={116}/>
            </div>
            </div>
          </Card.Text>
          <Card.Text className="container-sm">
            <div className="row">
              <div className="col">
                <h2>Volunteer</h2>
              </div>
              <div className="col">
                <h2>Donate</h2>
              </div>
              <div className="col">
                <h2>Learn More</h2>
              </div>
            </div>
          </Card.Text>
      </Card.Body>
    </Card> 
   
  );
}
