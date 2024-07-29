import Button from "./Button"


const Header = () => {

    return (<div className="header">
        <nav className="header__wrapper">
            <ul className="header__options">
                <Button title='All Posts' link="/home"/>
                <Button title='Favourite Posts' link="/fav"/>
            </ul>
        </nav>
    </div>)
}

export default Header