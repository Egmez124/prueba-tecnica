import {Link} from 'react-router-dom';
import logo from '../imgs/Group 4032.png'
import twitter from '../imgs/twitter.png'
import linkedin from '../imgs/linkedin.png'
const Info = ()=> {
    return (
        <div className="container-info">
            <div className="container-text">
                <img src={logo} alt="logo" className="img01"></img>
                <div className="titulo">    
                    <h1 className="text01">Desarrolla todo <span>tu POTENCIAL</span> dentro del equipo <span>ATOMIC</span>LABS</h1>
                    <Link to="/login">
                        <button className="boton01">!Quiero ser parte!</button>
                    </Link>
                </div>
            </div>
            <div className="pie-info">
                <div>2020 AtomicLabs. Todos los derechos reservados.</div>
                <div></div>
                <div><Link to="/terms-conditions"><p>Aviso de privasidad</p></Link></div>
                <div><img src={linkedin} alt="linkedin"/></div>
                <div><img src={twitter} alt="twitter"/></div>
            </div>
        </div>
    )
}

export default Info;