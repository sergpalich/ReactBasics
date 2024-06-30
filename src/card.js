import { Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';




const Card1 = (props) => {
    const { currentCardData, nextStep } = props;

    return (
        
        <Container className="card text-center align-items-center col-10 col-sm-6 mt-4 mx-auto border-0">
            <Card style={{ width: '18rem' } }>
            <Card.Img  src={currentCardData.image} className="img-fluid" style={{backgroundColor: currentCardData.bgColor}}  />
            <Card.Body>
                <Card.Title> {currentCardData.title} </Card.Title>
                <Card.Text>
                {currentCardData.description}
                </Card.Text>
                <div className='d-flex justify-content-end'>
                <Button className="button btn-circle bi bi-arrow-right" style={{backgroundColor: "#000000" , borderRadius: "50%"}} onClick={nextStep} ></Button>
                </div>
            </Card.Body>
            </Card>
        </Container>
)};
 
export default Card1;