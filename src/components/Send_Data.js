import {Link} from 'react-router-dom';
import img05 from '../imgs/Group 4039.png'
import twitter from '../imgs/twitter.png'
import linkedin from '../imgs/linkedin.png'
const SendData = ()=>{
    return (
            <div className="container-login">
            <div className="column-1">
                <div className="column-data">
                    <h1 id="title02">TUS DATOS <br/><span>HAN SIDO ENVIADOS <br/>CON ÉXITOS</span></h1>
                </div>
                <div className="text-sen-data">
                    <p className="text-data">En breve recibirás un correo de confirmación</p>
                    <p className="text-data">por parte de AtomicLabs.</p>
                    <p id="anuncio-1">Recuerda revisar tu bandeja de APAM</p>
                    <p id="anuncio">!Esparamos verte pronto!</p>
                </div>
            </div>
            <div>
                <img src={img05} alt="img05" className="img06"></img>
            </div>
            <div className="pie">
                <div>2020 AtomicLabs. Todos los derechos reservados.</div>
                <div></div>
                <div><Link to="/terms-conditions"><p>Aviso de privasidad</p></Link></div>
                <div><img src={linkedin} alt=""/></div>
                <div><img src={twitter} alt=""/></div>
            </div>
            </div>
    )
}

export default SendData;