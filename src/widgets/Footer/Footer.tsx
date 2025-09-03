import LogoIcon from '@/shared/assets/icons/Logo.svg?react';
import styles from './Footer.module.scss';
import { Link } from 'react-router';
import { routePaths } from '@/shared/config';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <LogoIcon className={styles.icon} />

                <div className={styles.links}>
                    {/* About */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>About</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    out Branches
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    change Log
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Quick Links</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    faqs
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    receipes
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Help Support */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Help Support</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    termOfService
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    privacyPolicy
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    security
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Company</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    blog
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Social */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Social</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    facebook
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    instagram
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={routePaths.home}>
                                    twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>Copyright 2024 easymart@gmail.com</div>
        </footer>
    );
};

export default Footer;
