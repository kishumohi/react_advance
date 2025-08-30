import { Link } from 'react-router';
import styles from './HomePage.module.scss';
import { useTheme } from '@/shared/config';

function HomePage() {
    const { toggleTheme } = useTheme();
    return (
        <>
            <h1 className={styles.title}>Home</h1>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/login'}>Login Page</Link>
        </>
    );
}

export default HomePage;
