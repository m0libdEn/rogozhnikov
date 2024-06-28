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
    const {image, text, date, title} = props

    return(
        <div className = "post">
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
        </div>
    )
}

export default Post