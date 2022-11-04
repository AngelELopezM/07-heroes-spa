import { Link, NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', { replace: true });
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Asociaciones</Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className={({ isActive }) => { return `nav-link ${isActive && 'active'}` }} to="marvel">Marvel</NavLink>
                            <NavLink className={({ isActive }) => { return `nav-link ${isActive && 'active'}` }} to="dc">DC</NavLink>
                            <NavLink className={({ isActive }) => { return `nav-link ${isActive && 'active'}` }} to="search">Search</NavLink>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">

                            <span className="nav-item nav-link text-primary">Angel</span>

                            <button
                                className="nav-item nav-link btn btn-outline-warning"
                                onClick={onLogout}
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
