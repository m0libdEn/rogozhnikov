import { useDispatch, useSelector } from "../../../node_modules/react-redux/dist/react-redux";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { addFavourite } from "../../redux/reducers/likeReducer/favouriteReducer";

interface Props {
    id: number;
    image?: string;
    text: string,
    date: string,
    lesson_num: 0,
    title: string,
    author: 0;
}

const Post = (props:Props) => {
    const {id, image, text, date, title} = props
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favourites = useSelector(state => state.post);
    console.log(favourites);
    

    const handleCick = () => {navigate(`/post/${id}`)}

    const handleFav = () => {
        dispatch(addFavourite(props));
    }

    return(
        <div className = "post" onClick={handleCick}>
            <div className="post__container">
            <div className = "post__info">
                <p className="post__info-date">{date}</p>
                <h2 className="post__info-title">{title}</h2>
                <p className = "post__info-text">{text}</p>
             </div>
             {image && (
                 <div className = "post__image-wrapper">
                    <img src={image} alt={title} className = "post__image" />
                </div>
             )}
            </div>
            <button onClick={(el)=>{
                el.stopPropagation();
                handleFav()
                }}>test</button>
        </div>
    )
}

export default Post
