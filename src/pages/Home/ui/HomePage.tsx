import { Button, Spinner } from '@/shared/ui';
import styles from './HomePage.module.scss';
import { Footer, Header } from '@/widgets';
import { useEffect, useState } from 'react';

function HomePage() {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.content}>
                <Button onClick={() => setError(true)}>Click</Button>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
