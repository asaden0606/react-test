import * as React from 'react'
import * as styles from '../scss/styles.module.scss';

interface IndexPageProps { }

export default class SolutionPage extends React.Component<IndexPageProps, {}> {
    public render() {
        return (
            <div className={`${styles.block} ${styles.solution}`}>
                <h2 id="solution" className={`${styles.subtitle} ${styles.animation}`}>Solution</h2>
                <h3 className={styles.subtitlesupport}>事業内容</h3>
                <div className={`${styles.column2} ${styles.solution1} ${styles.jsfaderight}`} data-scroll="out">
                    <div className={styles.column2item}>
                        <h2 className={styles.solutiontitle}>戦略・システムコンサルティング</h2>
                        <p className={styles.solutionbody}>
                            豊富なビジネス経験を有するコンサルタントが、お客様のビジネス上の課題、ニーズをヒアリングし、コストパフォーマンスに優れた最適なソリューションをご提案致します。設計から開発・運営まで一貫して対応させていただくことで、お客様の課題解決といった共通のゴールに向かって伴走支援させていただきます。
                        </p>

                    </div>
                    <div className={styles.column2item}><img className="alignnone size-full wp-image-999"
                        src="http://localhost/wordpress/wp-content/uploads/2022/08/solution_consulting.png" alt="" width="5017"
                        height="2990" /></div>
                </div>
                <div className={`${styles.column2} ${styles.solution2} ${styles.pcreverse} ${styles.jsfadeleft}`} data-scroll="out">
                    <div className={styles.column2item}>
                        <h2 className={styles.solutiontitle}>Webサイト制作</h2>
                        <p className={styles.solutionbody}>
                            ビジネスの顔となる企業サイトの制作、改善提案、デザイン作成、ブランディング提案、スマホ画面対応、CMS（Wordpress）導入等をご提供致します。最新のライブラリを活用する事で、おしゃれなデザインを低予算で実現致します。
                        </p>

                    </div>
                    <div className={styles.column2item}><img className="alignnone size-full wp-image-1000"
                        src="http://localhost/wordpress/wp-content/uploads/2022/08/solution_web.png" alt="" width="1075" height="879" />
                    </div>
                </div>
                <div className={`${styles.column2} ${styles.solution3} ${styles.jsfaderight}`} data-scroll="out">
                    <div className={styles.column2item}>
                        <h2 className={styles.solutiontitle}>Webシステム・アプリケーション開発</h2>
                        <p className={styles.solutionbody}>
                            オリジナルソーシャルネットワークシステム（SNS）、ビジネスマッチングプラットフォーム、社内コミュニケーションシステム、ECサイト、業務システム等、お客様が作りたいシステム、アプリケーションを最適なコストで実現します。Alpharevoシステムのホワイトレーベルを活用した御社オリジナルSNSをリリースする事で、御社のビジネスをプラットフォーマー化する事が可能です。
                        </p>
                    </div>
                    <div className={styles.column2item}><img className="alignnone size-full wp-image-1001"
                        src="http://localhost/wordpress/wp-content/uploads/2022/08/solution_appli.png" alt="" width="1090"
                        height="783" /></div>
                </div>
                <div className={`${styles.column2} ${styles.solution4} ${styles.pcreverse} ${styles.jsfadeleft} `} data-scroll="out">
                    <div className={styles.column2item}>
                        <h2 className={styles.solutiontitle}>DXツール開発・導入</h2>
                        <p className={styles.solutionbody}>
                            リモートワークの普及で需要が高まっているビデオ会議システム、AIを活用した文字おこしシステム、自動翻訳システム等、最新のクラウドサービスを組み込んだ開発が可能です。御社のビジネスに関して、AIで何が実現できるのか？是非ともご相談下さい。
                        </p>
                    </div>
                    <div className={styles.column2item}><img className="alignnone size-full wp-image-1002"
                        src="http://localhost/wordpress/wp-content/uploads/2022/08/solution_dx.png" alt="" width="1120" height="910" />
                    </div>
                </div>
                <div className={`${styles.column2} ${styles.solution5} ${styles.jsfaderight}`} data-scroll="out">
                    <div className={styles.column2item}>
                        <h2 className={styles.solutiontitle}>保守・運用</h2>
                        <p className={styles.solutionbody}>
                            システム稼働後の運用保守を行います。また、他社で開発されたシステムの引継ぎも可能です。インフラ、サーバーの管理、セキュリティ対策まで一貫してお引き受けする事が可能ですので、お気軽にご相談下さい。</p>
                    </div>
                    <div className={styles.column2item}><img className="alignnone size-full wp-image-1003"
                        src="http://localhost/wordpress/wp-content/uploads/2022/08/solution_protect.png" alt="" width="1179"
                        height="893" /></div>
                </div>
            </div>

        )
    };
}

