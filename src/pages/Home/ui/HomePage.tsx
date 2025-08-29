import { Link } from 'react-router';

function HomePage() {
    return (
        <div>
            HomePage
            <Link to={'/login'}>Login Page</Link>
        </div>
    );
}

export default HomePage;
