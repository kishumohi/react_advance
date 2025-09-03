import { Spinner } from '@/shared/ui';
import styles from './HomePage.module.scss';
import { Footer, Header } from '@/widgets';

function HomePage() {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.content}>
                <h1 className={styles.title}>Home Page</h1>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
