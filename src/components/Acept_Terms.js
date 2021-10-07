import {Link} from 'react-router-dom';
const AceptTerms = ()=>{
    return (
        <div>
            <img className="logo"></img>
            <img className="1"></img>
            <img className="2"></img>
            <img className="3"></img>
            <img className="4"></img>
            <img className="1-big"></img>
            <Link to="/codigo"><p>Regresar</p></Link>
            <h1>TÉRMINOS Y CONDICIONES</h1>
            <p>Por favor revisa nuestros terminos y condiciones para este servicio:</p>
            <Link to="/terms-conditions">
                <a>Consulta terminos y condiciones</a>
            </Link>
            <form>
                <label>
                    Acepto los terminos y condiciones
                    <checkbox></checkbox>
                </label>
                <Link to="/send-data">
                    <button>Enviar</button>
                </Link>
            </form>
            <img className="img02"></img>
        </div>
    )
}

export default AceptTerms;