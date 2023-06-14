
import Card from 'react-bootstrap/Card';
import img from "./assets/hose_squad.jpg";
import "./HoseHero.css";
import { HeartPulseFill, CurrencyDollar, LightbulbFill} from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';



export function HoseHero() {
  return (
    <div>
    
    <Card className="bg-dark text-white" >
      <Parallax translateX={[-3, 3]}>
      <Card.Img src={img} alt="Squad" />
      </Parallax>
      <Card.Body className="card-img-overlay">
          <Card.Text className="card-title"></Card.Text>
          <br/>
          <br/>
          <br/>
          <br/>
          <Card.Title className="card-title"><h1><u>GET INVOLVED</u></h1></Card.Title>
          <Card.Text className="card-text container-sm">
            <br/>
            <br/>
            <br/>
            <br/>
          
          <br/>

            <div className="row">
            <div className="col">
            <Link to="/login">
            <HeartPulseFill size={116} style={{color: "white"}}/>
            </Link>
            </div>
            <div className="col">
            <Link to="/createdonation">
            <CurrencyDollar size={116} style={{color: "white"}}/>
            </Link>
            </div>
            <div className="col">
            <Link to="/about">
            <LightbulbFill size={116} style={{color: "white"}}/>
            </Link>
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
    </div>
  );
}
