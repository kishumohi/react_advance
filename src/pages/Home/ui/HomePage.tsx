import { Link } from 'react-router';
import styles from './HomePage.module.scss';
import { useTheme } from '@/shared/config';
import { Button } from '@/shared/ui';

function HomePage() {
    const { toggleTheme } = useTheme();
    return (
        <>
            <h1 className={styles.title}>Home</h1>
            <Button theme='outline' onClick={toggleTheme}>
                Theme
            </Button>
            <Link to={'/login'}>Login Page</Link>
        </>
    );
}

export default HomePage;
