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
      <br/>
      <br/>
    <div>
      <div>
        <Hero />
      </div>

      <br/>
      <br/>
      <Card style={{ width: '100%' }}>
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
          height: "100%"
        }}>
          <Diamond
            color="#ad8f43"
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

    <div className="container-sm col-5">
      <ScrollPictures />
    </div>
    
    <br/>
    <br/>

      <div className="row text-center"> 
        <h2 className="display-6 container-sm"> Neighbors Helping Neighbors </h2>
      </div>

      <div className="text-center container-sm">
        <p>
          Tellico Village offers the perfect address for living!  We're idealy located on the western shore of Tellico Lake, Tellico VIllage just southwest of Knoxville, Tennessee. The Great Smoky Mountains National Park, Dollywood, Gatlinburg, Pigeon Forge and other fun destinations are within 50 miles. Sixteen states, the Gulf of Mexico, and the Atlantic shoreline are within 500 miles of Tellico Village. Tellico Village is just 12.2 miles from I-75, exit 81. 
        </p>
        <p>
          The Fire Department coverage area is about 7.8 square miles.
        </p>
        <p>
          Tellico Village was established in 1986 and located in Loudon County and Monroe County, Tennessee. It encompasses nearly 5,000 acres along Tellico Lake with the community continuing to grow because of the number of recreational amenities available and the friendliness of the more than 7,000 residents.
        </p>
        <p>
          There are many clubs and social activities available that cover a full range of interests. The Village amenities include three championship golf courses, yacht and country club for social activities and dining, and recreational facilities that offer a fitness center, indoor and outdoor swimming pools, and courts for a wide range of racquet sports. Tellico Lake provides for a full range of boating activities and the fishing is great. The Village is located approximately 35 minutes from downtown Knoxville allowing access to shopping, University of Tennessee activities, excellent medical care, and the Knoxville airport.
        </p>
      </div>
    </Container>
  )
}