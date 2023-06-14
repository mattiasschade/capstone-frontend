import Card from 'react-bootstrap/Card';
import img from "./assets/firetruck.jpeg";

export function Hero() {
  return (
  
    <Card className="bg-dark text-white">
        <Card.Img src={img} alt="Firetruck" />
    </Card> 
   
  );
}

