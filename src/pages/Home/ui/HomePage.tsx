import { Link } from 'react-router';
import styles from './HomePage.module.scss';
import { useTheme } from '@/shared/config';
import { Button, Input } from '@/shared/ui';
import { BiSearch } from 'react-icons/bi';

function HomePage() {
    const { toggleTheme } = useTheme();
    return (
        <>
            <h1 className={styles.title}>Home</h1>
            <Input placeholder='Search...' Icon={<BiSearch />} />
            <Button theme='outline' onClick={toggleTheme}>
                Theme
            </Button>
            <Link to={'/login'}>Login Page</Link>
        </>
    );
}

export default HomePage;
