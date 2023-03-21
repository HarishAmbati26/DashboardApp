import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import HomeHeader from '../home-header/home-header';
import './home.css';

function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/') {
            navigate('/beginner');
        }
    }, [])

    return (
        <div>
            <HomeHeader />

            <Outlet />
        </div>
    )
}

export default Home;