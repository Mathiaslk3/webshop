import "./Navigator.scss";


function Navigator () {
    return ( 
        <nav className="navigator">
            <ul className="navigator__menu">
                <li className="navigator__menuItem"><a href="/" className="navigator__menuLink">Home</a></li>
                <li className="navigator__menuItem"><a href="/about" className="navigator__menuLink">About</a></li>
                <li className="navigator__menuItem"><a href="/i" className="navigator__menuLink">Home</a></li>
                <li className="navigator__menuItem"><a href="/i" className="navigator__menuLink">Home</a></li>
                <li className="navigator__menuItem"><a href="/i" className="navigator__menuLink">Home</a></li>

            </ul>
        </nav>
    )
}

export default Navigator;