import {Link} from 'react-router-dom';
import number1 from '../imgs/Group 4016.png'
import number2 from '../imgs/Group 4020.png'
import number3 from '../imgs/Group 4017.png'
import number4 from '../imgs/Group 4018.png'
import big2 from '../imgs/Group 4023.png'
import img02 from '../imgs/Group 4034.png'
import twitter from '../imgs/twitter.png'
import linkedin from '../imgs/linkedin.png'
const Validate = ()=> {
    return (
        <div className="container-login">
            {/* <img className="logo"></img> */}
            <div className="column-1">
                <div className="numbers">
                    <img src={number1} alt="number1" className="1"></img>
                    <img src={number2} alt="number2" className="2"></img>
                    <img src={number3} alt="number3" className="3"></img>
                    <img src={number4} alt="number4" className="4"></img>
                    <div>
                        <progress max="100" value="40"></progress>
                    </div>
                </div>
                <div className="column-validate">
                    <div><Link to="/login"><a>Regresar</a></Link></div>
                    <img src={big2} alt="big2" className="big-1"></img>
                    <h1 id="title02">VALIDA TU <span>CELULAR</span></h1>
                </div>
                <div className="text-validate">
                    <p className="text-validate-1">Necesitamos tu número para continuar</p>
                    <p>Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</p>
                </div>
                <form>
                    <div className="firstname">
                        Número de Celular
                    </div>
                    <input className="input-name"></input>
                </form>
            </div>
            <div className="container-img">
                <img src={img02} alt="img02" className="img03"></img>
            </div>
            <div className="fila-2">
                <Link to="/codigo">
                    <button className="boton-enviar">Continuar</button>
                </Link>
            </div>
            <div className="pie">
                <div>2020 AtomicLabs. Todos los derechos reservados.</div>
                <div></div>
                <div><Link to="/terms-conditions"><a>Aviso de privasidad</a></Link></div>
                <div><img src={linkedin} alt="linkedin"/></div>
                <div><img src={twitter} alt="twitter"/></div>
            </div>
        </div>
    )
}

export default Validate;