import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar bg-primary mb-4 p-4">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fs-1" to="/">BOOLFILMS</Link>
            </div>
        </nav>
    )
}

export default Header
