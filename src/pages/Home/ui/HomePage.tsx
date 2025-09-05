import { Tabs } from '@/shared/ui';
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
                {/* <Tabs defaultValue='1'>
                    <Tabs.List>
                        <Tabs.Trigger value='1'>1</Tabs.Trigger>
                        <Tabs.Trigger value='2'>2</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value='1'>1</Tabs.Content>
                    <Tabs.Content value='2'>2</Tabs.Content>
                </Tabs> */}
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
