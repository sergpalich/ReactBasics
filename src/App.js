import './App.css';
import Card from './card';
import {useState} from 'react';

function App() {

  const [step, setStep] = useState(0);
  const tutorialData = [
    {
    title: "Dedica moltes hores",
    description: "Un mimim de 30 hores a la setmana. Si no en tens prou, haurias de dicar-li mes hores. Al principi semba impossible, pero notaras una millora rapidament ",
    bgColor: " ",
    image: " ",
  
  },

  {
    title: "Programa projectes propis",
    description: "Mes val 10 hores treballant en projectes propis que 10 hores mirant tutorials.La motivacion i la implicacio en el projecte ajudara a accelerar el teu aprenntatge ",
    bgColor: " ",
    image: " ",
  
  },

  {
    title: "Procura descansar",
    description: "Descansar be i desconnectar son vitals. D áquesta manera reduiras l estres i l ansietat. Milloras la teva concentracio i consolidaras el teu aprentage",
    bgColor: " ",
    image: " ",
  
  }
] 
  /* const handleClick = () => {
    
    setStep = (step) => {
        tutorialData.map ((step)=>(
          <div className="textArea">
          <h1>{step.title} </h1>
          <p>{step.description} </p>
        </div>
        ))}
        
      } */

  const elementoActual = tutorialData[step]
  return (
    <div>
      <Card elementoActual= {elementoActual} />  
    </div>
  );
};

export default App;
