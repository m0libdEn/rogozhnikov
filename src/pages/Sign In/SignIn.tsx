import {useState } from "react";

interface Props {
    isSigned:() => void
}



const SignIn = (props:Props) => {
    const {isSigned} = props

    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [status, setStatus] = useState(false);

    const handleClick = () => {
        if(email !=='' && pass !==''){
            setStatus(true)
            setTimeout(()=>{
                isSigned()
            }, 2500)
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