import {Link} from 'react-router-dom';

const Login = ()=>{
    return (
        <div>
            <img className="logo"></img>
            <img className="1"></img>
            <img className="2"></img>
            <img className="3"></img>
            <img className="4"></img>
            <img className="1-big"></img>
            <h1>TE QUEREMOS CONOCER</h1>
            <p>Queremos saber quien eres, por favor ingresa los siguientes datos:</p>
            <form>
                <label>
                    Nombre (s)
                    <input></input>
                </label>
                <label>
                    Apellidos
                    <input></input>
                </label>
                <Link to="/validate">
                    <button>Enviar</button>
                </Link>
            </form>
            <img className="img02"></img>
        </div>
    )
}

export default Login;