import { Button } from '@/shared/ui';
import styles from './NotFoundPage.module.scss';
import NotFoundIcon from '@/shared/assets/icons/NotFound.svg?react';
import { useNavigate } from 'react-router';
import { routePaths } from '@/shared/config';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const HandleReload = () => {
        navigate(routePaths.home);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <NotFoundIcon />
                <h3 className={styles.title}>404 Not Found</h3>
                <p className={styles.description}>This page is not found</p>
                <Button onClick={HandleReload}>GoTo Home</Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
