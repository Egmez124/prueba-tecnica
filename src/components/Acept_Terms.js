import {Link} from 'react-router-dom';
import number1 from '../imgs/Group 4016.png'
import number2 from '../imgs/Group 4016.png'
import number3 from '../imgs/Group 4016.png'
import number4 from '../imgs/Group 4022.png'
import twitter from '../imgs/twitter.png'
import linkedin from '../imgs/linkedin.png'
import big2 from '../imgs/Group 4025.png'
import img02 from '../imgs/Group 4038.png'
const AceptTerms = ()=>{
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
                        <progress max="100" value="80"></progress>
                    </div>
                </div>
                <div className="column-validate">
                    <div><Link to="/validate"><p>Regresar</p></Link></div>
                    <img src={big2} alt="big2" className="big-1"></img>
                    <h1 id="title02">TERMINOS Y <span>CONDICIONES</span></h1>
                </div>
                <div className="text-validate">
                    <p className="text-validate-1">Por favor revisa nuestros terminos y condiciones para este servicio:</p>
                    <Link to="/terms-conditions">
                        <p>Consulta terminos y condiciones</p>
                    </Link>
                </div>
                <div className="conditions">
                    <input type="checkbox"></input>
                    <p>Acepto los Términos y Condiciones</p>
                </div>
            </div>
            <div className="container-img">
                <img src={img02} alt="img02" className="img04"></img>
            </div>
            <div className="fila-2">
                <Link to="/send-data">
                    <button className="boton-enviar">Continuar</button>
                </Link>
            </div>
            <div className="pie">
                <div>2020 AtomicLabs. Todos los derechos reservados.</div>
                <div></div>
                <div><Link to="/terms-conditions"><p>Aviso de privasidad</p></Link></div>
                <div><img src={linkedin} alt="linkedin"/></div>
                <div><img src={twitter} alt="twitter"/></div>
            </div>
        </div>
    )
}

export default AceptTerms;