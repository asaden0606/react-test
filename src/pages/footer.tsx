import * as React from 'react'
import * as styles from '../scss/styles.module.scss';

interface IndexPageProps { }

export default class FooterPage extends React.Component<IndexPageProps, {}> {
    public render() {
        return (
            <footer className={styles.lpfooter}>
                <div className={styles.footerlogo}>
                    <img src="/imgs/top-fkv-logo.svg" className="shape" />
                </div>
                <ul className={styles.footernav}>
                    <li className={styles.footerlink}>
                        <a href="#solution">事業内容</a>
                    </li>
                    <li className={styles.footerlink}>
                        <a href="#company">会社概要</a>
                        </li>
                    <li className={styles.footerlink}>
                        <a href="#info">お知らせ</a>
                        </li>
                    <li className={styles.footerlink}><a href="#contact">お問い合わせ</a></li>
                </ul>

                <p className={styles.footercopyright}>
                    Copyright 2022 Alpharevo Inc. All Rights Reserved
                </p>
            </footer>
        )
    };
}    