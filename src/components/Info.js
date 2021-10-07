import {Link} from 'react-router-dom';
import logo from '../imgs/Group 4032.png'
const Info = ()=> {
    return (
        <div className="container-info">
            <div className="container-center">
                <img src={logo} alt="logo" className="img01"></img>
                <h1 className="text01">Desarrolla todo tu POTENCIAL dentro del equipo ATOMICLABS</h1>
                <Link className="boton01" to="/login">
                    <button>!Quiero ser parte!</button>
                </Link>
            </div>
        </div>
    )
}

export default Info;