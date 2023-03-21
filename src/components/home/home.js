import { useEffect } from 'react';
import { Link, matchRoutes, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Beginner from '../beginner/beginner';
import './home.css';

function Home() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/beginner');
    }, [])

    useEffect(() => {
        tabChange();
    }, [location]);

    const tabChange = () => {
        document.getElementsByClassName('Home-select')[0]?.classList.remove('Home-select');
        if (location.pathname === '/beginner') {
            document.getElementsByClassName('Home-button')[0]?.classList.add('Home-select');
        } else if (location.pathname === '/intermediate') {
            document.getElementsByClassName('Home-button')[1]?.classList.add('Home-select');
        } else if (location.pathname === '/advanced') {
            document.getElementsByClassName('Home-button')[2]?.classList.add('Home-select');
        }
    }
    return (
        <div>
            <header className="Home-header">
                <h2>React Interview Questions</h2>
            </header>
            <div className='Home-level'>
                <div className='Home-button Home-select'><Link to="/beginner">Beginner</Link></div>
                <div className='Home-button'><Link to="/intermediate">Intermediate</Link></div>
                <div className='Home-button'><Link to="/advanced">Advanced</Link></div>
            </div>

            <Outlet />
        </div>
    )
}

export default Home;