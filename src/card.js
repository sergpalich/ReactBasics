import { Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Indicator from './components/Indicador';


const Card1 = (props) => {
    const { currentCardData, nextStep,  prevStep, step, tutorialData, handleStepClick } = props;

    return (
        
        <Container className="card text-center align-items-center col-10 col-sm-6 mt-4 mx-auto border-0">
            <Card style={{ width: '18rem' } }>
            <Card.Img  src={currentCardData.image} className="img-fluid" style={{backgroundColor: currentCardData.bgColor}}  />
            <Card.Body>
                <Card.Title> {currentCardData.title} </Card.Title>
                <Card.Text>
                {currentCardData.description}
                </Card.Text>
                

                <div className="d-flex text-align-center justify-content-between">  
                         <Indicator 
                            step={step}  
                            tutorialData={tutorialData.length}  
                            onStepClick={handleStepClick}
                        /> 
                        <div className="d-flex text-align-center justify-content-between">
                            {(step === 1 || step === 2) && (
                                <Button variant="secondary" className="btn-circle mr-4" style={{backgroundColor: "#FFFFFF" , borderRadius: "50%", color: "#000000"}} onClick={prevStep}>
                                    <i className="bi bi-arrow-left"></i>
                                </Button>
                            )}
                            {step !== 2 && (<Button variant="primary" className="btn-circle" style={{backgroundColor: "#000000" , borderRadius: "50%"}} onClick={nextStep}>
                                <i className="bi bi-arrow-right"></i>
                            </Button>
                            )}
                         </div>
                </div>                 
            </Card.Body>
            </Card>
        </Container>
)};
 
export default Card1;