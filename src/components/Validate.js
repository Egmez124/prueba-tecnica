import {Link} from 'react-router-dom';
const Validate = ()=> {
    return (
        <div>
            <img className="logo"></img>
            <img className="1"></img>
            <img className="2"></img>
            <img className="3"></img>
            <img className="4"></img>
            <img className="1-big"></img>
            <Link to="/login"><p>Regresar</p></Link>
            <h1>VALIDA TU CELULAR</h1>
            <p>Necesitamos tu número para continuar</p>
            <p>Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</p>
            <form>
                <label>
                    Número de Celular
                    <input></input>
                </label>
                <Link to="/codigo">
                    <button>Continuar</button>
                </Link>
            </form>
            <img className="img02"></img>
        </div>
    )
}

export default Validate;