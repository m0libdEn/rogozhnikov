import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

interface Props{
    title:string
    link?:string;
}

const Button:React.FC<Props> = props => {

    const navigate = useNavigate();

    const {title, link} = props

    
    return (<li className="header__option"><a href={link} className="hedaer__option-info">{title}</a></li>)
}

export default Button