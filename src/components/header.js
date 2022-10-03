function Header(){
    return (
        <header>
            <div className="header-1">
                <a href="#home " className="logo"><i className="fas fa-utensils"></i> food </a>
                <h3 className="call"> <i className="fas fa-phone"></i> call now : +123-456-7890 </h3>
            </div>

            <div className="header-2">
                <div id="menu" className="fas fa-hamburger"></div>

                <nav className="navbar">
                    <ul>
                        <li><a className="active" href="#home">home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#dishes">dishes</a></li>
                        <li><a href="#chef">chef</a></li>
                        <li><a href="#speciality">speciality</a></li>
                        <li><a href="#order">order</a></li>
                    </ul>
                </nav>

                <div className="share">
                    <a href="#home " className="fab fa-facebook"></a>
                    <a href="#home " className="fab fa-pinterest"></a>
                    <a href="#home " className="fab fa-instagram"></a>
                    <a href="#home " className="fab fa-twitter"></a>
                </div>
            </div>
        </header>
    )
}

export default Header;