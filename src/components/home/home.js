import { Link, Outlet } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div>
            <header className="App-header">
                <h2>React Interview Questions</h2>
            </header>
            <div className='App-level'>
                <h3><Link to="/beginner">Beginner</Link></h3>
                <h3><Link to="/intermediate">Intermediate</Link></h3>
                <h3><Link to="/advanced">Advanced</Link></h3>
            </div>

            <Outlet />
        </div>
    )
}

export default Home;