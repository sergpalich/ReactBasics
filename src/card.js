const Card = (props) => {
    const elementoActual = props.elementoActual;
    return (
    <div>
    <h1>{elementoActual.title} </h1>
    <p>{elementoActual.description} </p> 
    </div>
)};
 
export default Card;