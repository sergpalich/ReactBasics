const Card = (props) => {
    const currentCardData = props.currentCardData;
    const nextStep = props.nextStep;

    return (
    <div>
    <h1>{currentCardData.title} </h1>
    <p>{currentCardData.description} </p> 
    <button onClick={nextStep}>Next step</button>
    </div>
)};
 
export default Card;