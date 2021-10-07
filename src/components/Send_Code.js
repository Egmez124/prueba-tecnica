import {Link} from 'react-router-dom';
import ok from '../imgs/Group 4016@2x.png'
const SendCode = ()=> {
 return (
     <div className="container-send-code">
         <img className="img-ok" src={ok} alt="ok"/>
         <Link className="text-send-code" to="/acept-terms">
            <p>Hemos validado el código</p>
         </Link>
     </div>
 )
}
export default SendCode;