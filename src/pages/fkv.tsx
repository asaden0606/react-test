import * as React from 'react'
import * as styles from '../scss/styles.module.scss';

interface IndexPageProps { }

export default class FKVPage extends React.Component<IndexPageProps, {}> {
    public render() {
        return (            
            <div id='top' className={`${styles['topblock']} ${styles['fkv']}`}>

                <div className={styles.topfkv}>
                    <video className={styles.topfkvback} src="/imgs/top-fkv.mov" muted playsInline
                        loop width="300" height="150"></video>
                    <h2 className={styles['topfkvtitle']}>株式会社AlpharevoはDX、BtoBビジネスに強いITコンサルティング・開発会社です。 <br />貴社の事業課題を確実に理解し、伴走支援致します。</h2>
                    <h5 className={styles['topfkvscrolltitle']}>Scroll</h5>
                    <div className={styles['topfkvscroll']}></div>
                </div>
            </div>
        )
    };
}    