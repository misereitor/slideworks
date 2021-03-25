import { Link } from 'react-router-dom'
import './Header.css'

function Header () {
    return (
        <header>
            <div className="header">
                <h2>Crie seu perfil profissional</h2>
                <div className="links">
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <Link to='/register'>
                        <button>Registrar perfil</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header