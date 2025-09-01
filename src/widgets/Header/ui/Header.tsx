import LogoIcon from '@/shared/assets/icons/Logo.svg?react';
import MapPin from '@/shared/assets/icons/MapPin.svg?react';
import UserIcon from '@/shared/assets/icons/Users.svg?react';
import styles from './Header.module.scss';
import { AppIcon, Button, Input } from '@/shared/ui';
import { BiSearch } from 'react-icons/bi';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { useNavigate } from 'react-router';
import { routePaths } from '@/shared/config';

const Header = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate(routePaths.login);
    };
    return (
        <header className={styles.header}>
            <div className={styles.section}>
                <LogoIcon className={styles.logo} />
                <Button theme='ghost'>
                    <AppIcon Icon={MapPin} />
                </Button>
                <span>10115 New York</span>
            </div>
            <div className={styles.section}>
                <Input
                    rounded
                    placeholder={'Search by'}
                    Icon={<AppIcon size={18} Icon={BiSearch} theme='background' />}
                />
            </div>
            <div className={styles.section}>
                <Button theme='secondary'>Cart</Button>
                <Button theme='outline' onClick={handleLoginClick}>
                    <AppIcon Icon={UserIcon} />
                    <span>Login</span>
                </Button>

                <ThemeSwitcher />
            </div>
        </header>
    );
};

export default Header;
