import {useState } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";


const SignIn = () => {
    
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const navigate = useNavigate()

    const handleClick = () => {
        if(email !=='' && pass !==''){
            setTimeout(()=>{
                navigate('/home')
            }
            , 2500)
        }
    }


    return(
        <div className='sign__container'>
            <form className='sign__form'>
                <h2 className = 'sign__form-title'>Sign In</h2>
                <div className="sign__form-field">
                    <lable className="sign__field-label">Email</lable>
                    <input  type="email" className="sign__input sign__input-email" onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="sign__form-field">
                    <lable className="sign__field-label">Password</lable>
                    <input type="password" className="sign__input sign__input-password" onChange={(e)=>setPass(e.target.value)} required/>
                </div>
                <button className='sign__field-btn btn' onClick ={handleClick}>{status? 'Signing In...':'Sign'}</button>
            </form>
        </div>
    )
    
}

export default SignIn;