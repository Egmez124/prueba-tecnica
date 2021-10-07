import {Link} from 'react-router-dom';
import number1 from '../imgs/Group 4016.png'
import number2 from '../imgs/Group 4020.png'
import number3 from '../imgs/Group 4017.png'
import number4 from '../imgs/Group 4018.png'
import big1 from '../imgs/Group 4014.png'
import img02 from '../imgs/Group 4034.png'
const Validate = ()=> {
    return (
        <div className="container-login">
            {/* <img className="logo"></img> */}
            <div className="column-1">
                <div className="numbers">
                    <img src={number1} className="1"></img>
                    <img src={number2} className="2"></img>
                    <img src={number3} className="3"></img>
                    <img src={number4} className="4"></img>
                    <div>
                        <progress max="100" value="40"></progress>
                    </div>
                </div>
                <div className="column-2">
                    <div><Link to="/login"><a>Regresar</a></Link></div>
                    <img src={big1} className="big-1"></img>
                    <h1 id="title02">VALIDA TU <span>CELULAR</span></h1>
                </div>
                <p>Necesitamos tu número para continuar</p>
                <p>Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</p>
                <form>
                    <div className="firstname">
                        Número de Celular
                    </div>
                    <input className="input-name"></input>
                </form>
            </div>
            <div>
                <img src={img02} className="img03"></img>
            </div>
            <div className="fila-2">
                <Link to="/validate">
                    <button className="boton-enviar">Continuar</button>
                </Link>
            </div>
        </div>
    )
}

export default Validate;