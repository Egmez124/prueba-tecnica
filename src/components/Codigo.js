import {Link} from 'react-router-dom';
const Codigo = ()=>{
    return (
        <div>
            <img className="logo"></img>
            <img className="1"></img>
            <img className="2"></img>
            <img className="3"></img>
            <img className="4"></img>
            <img className="1-big"></img>
            <Link to="/validate"><p>Regresar</p></Link>
            <h1>CÓDIGO DE VERIFICACIÓN</h1>
            <p>Te enviamos un SMS al número:</p>
            <p>+52 767677676</p>
            <img alt="edit"/>
            <p>Ingresa el código de verificación</p>
            <form>
                <label>
                    Código de verificación
                    <input></input>
                </label>
                <p>¿No recibiste el código?<a>Reenviar</a></p>
                <Link to="/resend-code">
                    <button>Validar Código</button>
                </Link>
            </form>
            <img className="img02"></img>
        </div>
    )}

    export default Codigo;