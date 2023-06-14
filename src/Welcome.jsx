import Card from 'react-bootstrap/Card';
import { Hero } from "./Hero";
import "./Welcome.css"
import ScrollPictures from "./Carousel";
import Container from "react-bootstrap/Container"
import { Diamond } from "react-awesome-shapes";
import { HoseHero } from "./HoseHero";
import "./HoseHero.css"

import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossOrigin="anonymous"
/>
export function Welcome () {
  
  return(
    <Container fluid width="100%">
      
    <div>
      <div>
        <Hero />
      </div>

    
      <Card style={{ width: '100%', position: "relative"}}>
      <Card.Body>
        <br/>
        <br/>
        <Card.Title><h1 className="display 6 container-sm">Our Mission</h1></Card.Title>
        <br/>
        <Card.Text>
          <p className="lead container-sm col-9">
        The Tellico Village Volunteer Fire and Rescue Department is committed to protecting the lives and property of Tellico Village and Loudoun County residents and visitors by providing the best possible fire, rescue, emergency and medical response services. We pledge to perform our duty with courage and dedication. We also strive to be active in our community and proactive with public education and prevention campaigns.
        </p>
        <br/>
        <div className="row text-center"> 
        <h2 className="display 6 container-sm"> Neighbors Helping Neighbors </h2>
      </div>
        <br/>
        <br/>
        <br/>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}>
          <Diamond
            color="#f0b51e"
            size="80px"
            zIndex={2}/>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div>
      <HoseHero />
    </div>

    <Card style={{ width: '100%', position: "relative"}}>
    <br/>
    <br/>
      <div className="text-center container-sm lead">
      
        <p>
          Tellico Village was established in 1986 and located in Loudon County and Monroe County, Tennessee. It encompasses nearly 5,000 acres along Tellico Lake with the community continuing to grow because of the number of recreational amenities available and the friendliness of the more than 7,000 residents.
        </p>
        <p>
          The Fire Department coverage area is about 7.8 square miles.
        </p>
      </div>
      <br/>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}>
          <Diamond
            color="#f0b51e"
            size="60px"
            zIndex={2}/>
        </div>

    </Card>

    <div className="container-sm col-10">
      <ScrollPictures />
    </div>
    
    <br/>
    <br/>
    </Container>
  )
}