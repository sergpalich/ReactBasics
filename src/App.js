import './App.css';
import Card1 from './card';
import {useState} from 'react';
import time_management from "../src/assets/time_managment.svg"
import programming from "../src/assets/programming.svg"
import meditation from "../src/assets/meditation.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Indicator from './components/Indicador';

function App() {

  const [step, setStep] = useState(0);
  const tutorialData = [
    {
    title: "Dedica moltes hores",
    description: "Un mimim de 30 hores a la setmana. Si no en tens prou, haurias de dicar-li mes hores. Al principi semba impossible, pero notaras una millora rapidament ",
    bgColor: "#088A85",
    image: time_management,
  
  },

  {
    title: "Programa projectes propis",
    description: "Mes val 10 hores treballant en projectes propis que 10 hores mirant tutorials.La motivacion i la implicacio en el projecte ajudara a accelerar el teu aprenntatge ",
    bgColor: "#D8D8D8",
    image: programming,
  
  },

  {
    title: "Procura descansar",
    description: "Descansar be i desconnectar son vitals. D áquesta manera reduiras l estres i l ansietat. Milloras la teva concentracio i consolidaras el teu aprentage",
    bgColor: "#F5DA81",
    image: meditation,
  }
] 
  const currentCardData = tutorialData[step]
  

  function nextStep() {
    setStep (prev => (prev+1)%tutorialData.length)
  }

  function prevStep() {
    setStep (prev => (prev-1)%tutorialData.length)
  }

  const handleStepClick = (index) => {
    setStep(index);
  }

  
  return (
    <div>
      <Card1 
        currentCardData= {currentCardData} 
        nextStep={nextStep} 
        prevStep={prevStep} 
        step={step}>  
      </Card1> 

      <Indicator 
        step={step}  
        tutorialData={tutorialData.length}  
        onStepClick={handleStepClick}
      />  
    </div>
  );
};

export default App;
