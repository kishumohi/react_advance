import { Spinner } from '@/shared/ui';
import styles from './PageLoader.module.scss';

const PageLoader = () => {
    return (
        <div className={styles.wrapper}>
            <Spinner />
            <h3 className={styles.title}>Loading...</h3>
        </div>
    );
};

export default PageLoader;
