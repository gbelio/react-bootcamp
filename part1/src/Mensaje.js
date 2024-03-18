const Mensaje = (props) => {
    return(
        <div>
            <h1>Hola {props.name}</h1>
            <h2 style={{color: props.color}}>Apellido: {props.surname}</h2>
        </div>
    )
}

export default Mensaje