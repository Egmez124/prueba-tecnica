import {Link} from 'react-router-dom';
import number1 from '../imgs/Group 4015.png'
import number2 from '../imgs/Group 4019.png'
import number3 from '../imgs/Group 4017.png'
import number4 from '../imgs/Group 4018.png'
import big1 from '../imgs/Group 4014.png'
import img02 from '../imgs/Group 4033.png'
import twitter from '../imgs/twitter.png'
import linkedin from '../imgs/linkedin.png'
const Login = ()=>{
    return (
        <div className="container-login">
            <div className="column-1">
                <div className="numbers">
                    <img src={number1} alt="number1" className="1"></img>
                    <img src={number2} alt="number2" className="2"></img>
                    <img src={number3} alt="number3" className="3"></img>
                    <img src={number4} alt="number4" className="4"></img>
                    <div>
                        <progress max="100" value="25"></progress>
                    </div>
                </div>
                <div className="column-2">
                    <img src={big1} alt="big1" className="big-1"></img>
                    <h1 id="title02">TE QUEREMOS <span>CONOCER</span></h1>
                </div>
                <p>Queremos saber quien eres, por favor ingresa los siguientes datos:</p>
                <form>
                    <div className="firstname">
                        Nombre (s)
                    </div>
                    <input className="input-name"></input>
                    <div className="lastname">
                        Apellidos
                    </div>
                    <input className="input-lastname"></input>
                    
                </form>
            </div>
            <div className="container-img">
                <img src={img02} alt="img02" className="img02"></img>
            </div>
            <div className="fila-2">
                <Link to="/validate">
                    <button className="boton-enviar">Enviar</button>
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

export default Login;