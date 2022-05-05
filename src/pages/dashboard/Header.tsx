import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import Button from '@mui/material/Button';

const Header = () => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(onLogout())
    }

    return (
        <header className="header">
            <nav className="nav_left">
                <ul className="headerUl">
                    <Link to={`/`}>
                        <li className="headerli">
                            Home
                        </li>
                    </Link>
                </ul>
            </nav>
            <nav className="nav_right">
                <ul className="headerUl">
                    <Link to={`/cart`}>
                        <li className="headerli">
                            cart
                        </li>
                    </Link>
                    <Link to={`/profile`}>
                        <li className="headerli">
                            profile
                        </li>
                    </Link>
                    <li className="headerli">
                        <Button className="primary" color="secondary" variant="outlined" onClick={handleSubmit} sx={{
                            color: "white",
                            borderColor: 'white'
                        }}>Sign Out</Button>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header