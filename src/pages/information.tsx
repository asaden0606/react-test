import * as React from 'react'
import * as styles from '../scss/styles.module.scss';

interface IndexPageProps { }

export default class InformationPage extends React.Component<IndexPageProps, {}> {

    public render() {
        return (
            <div className={`${styles.block} ${styles.information}`} >
                <h2 id="info" className={`${styles.subtitle} ${styles.animation}`}>Information</h2>
                <h3 className={styles.subtitlesupport}>お知らせ</h3>
                <ul className={styles.infolist}>
                    <li>
                        <h5>2022.06.09</h5>
                        <p>KPMGコンサルティング株式会社とパートナーシップを締結しました！</p>
                    </li>
                    <li>
                        <h5>2022.02.03</h5>
                        <p>Visual Alpha株式会社とパートナーシップを締結しました！</p>
                    </li>
                    <li>
                        <h5>2021.09.01</h5>
                        <p>一般社団法人Fintech協会に入会しました！</p>
                    </li>
                    <li>
                        <h5>2021.07.07</h5>
                        <p>東京国際金融機構（FinCity.Tokyo）に入会しました！</p>
                    </li>
                    <li>
                        <h5>2021.06.30</h5>
                        <p>日本投資顧問業協会に入会しました！</p>
                    </li>
                </ul>
            </div>

        )
    }
}    