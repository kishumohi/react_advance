import { Link } from 'react-router';
import styles from './HomePage.module.scss';
import { useTheme } from '@/shared/config';
import { AppIcon, Button, Input } from '@/shared/ui';
import { BiSearch } from 'react-icons/bi';
import { Header } from '@/widgets';

function HomePage() {
    const { toggleTheme } = useTheme();
    return (
        <>
            {/* <h1 className={styles.title}>Home</h1> */}
            <Header />
            <Input placeholder='Search...' Icon={<AppIcon Icon={BiSearch} theme='background' />} />
            <Button theme='outline' onClick={toggleTheme}>
                Theme
            </Button>
            <Link to={'/login'}>Login Page</Link>
        </>
    );
}

export default HomePage;
