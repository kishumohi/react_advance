import { Button } from '@/shared/ui';
import styles from './PageError.module.scss';
import PageErrorIcon from '@/shared/assets/icons/PageError.svg?react';

const PageError = () => {
    const HandleReload = () => {
        location.reload();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <PageErrorIcon />
                <h3 className={styles.title}>Something went wrong</h3>
                <p className={styles.description}>
                    Sorry - an unexprected error occured. Please try refreshing the page or come back later.
                </p>
                <Button onClick={HandleReload}>Reload</Button>
            </div>
        </div>
    );
};

export default PageError;
