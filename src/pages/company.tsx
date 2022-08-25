import * as React from 'react'
import * as styles from '../scss/styles.module.scss';

interface IndexPageProps { }

export default class CompanyPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div className={` ${styles.block} ${styles.company} ${styles.reverse}` }>
        <h2 id="company" className={` ${styles.subtitle} ${styles.animation}` }>Company</h2>
        <h3 className={styles.subtitlesupport}>会社概要</h3>
        <div className={` ${styles.column2} ${styles.company1} ${styles.jsfadeup}`} data-scroll="out">
          <div className={styles.column2item}><img className="alignnone size-full wp-image-973"
            src="http://localhost/wordpress/wp-content/uploads/2022/08/seo.png" alt="" width="277" height="358" /></div>
          <div className={styles.column2item}>
            <h2 className={styles.companyseoheader}>代表取締役</h2>
            <h2 className={styles.companyseoname}>椿 雄一郎</h2>
            <p className={styles.companyseobody}>日本のIT/DX環境は他の先進国と比較して遅れていると言われておりますが、その責任の大きな部分は我々システム開発会社にあると考えています。
              国内には多くのシステム開発会社が存在しますが、貴社のベンダーは本当に貴社のビジネス課題・ゴールの本質を理解して、支援してくれているでしょうか？
              Alpharevoは金融機関出身者が立ち上げた、システム会社というユニークな立ち位置にあり、経営者の課題の本質を理解・伴走支援するソリューションを提供致します。</p>
          </div>
        </div>
        <div className={` ${styles.companyinfo} ${styles.jsfadeup}` }  data-scroll="out">
          <div className={styles.companyinforow}>
            <h2 className={styles.companyinfotitle}>会社名</h2>
            <p className={styles.companyinfobody}>株式会社Alpharevo</p>
          </div>
          <div className={styles.companyinforow}>
            <h2 className={styles.companyinfotitle}>所在地</h2>
            <p className={styles.companyinfobody}>〒107-0062 東京都港区南青山3-8-40
              青山センタービル 2F</p>

          </div>
          <div className={styles.companyinforow}>
            <h2 className={styles.companyinfotitle}>電話</h2>
            <p className={styles.companyinfobody}>03-5324-2702</p>

          </div>
          <div className={styles.companyinforow}>
            <h2 className={styles.companyinfotitle}>設立</h2>
            <p className={styles.companyinfobody}>2019年4月</p>

          </div>
          <div className={styles.companyinforow}>
            <h2 className={styles.companyinfotitle}>事業内容</h2>
            <div className={styles.companyinfobody}>
              <ul>
                <li>事業開発・戦略コンサルティング</li>
                <li>DXコンサルティング</li>
                <li>ITコンサルティング</li>
                <li>UX/UI開発</li>
                <li>プロトタイプ開発</li>
                <li>デザイン制作</li>
                <li>ウェブサイト制作・リニューアル</li>
                <li>システム・アプリケーション開発</li>
                <li>継続支援・運用・保守</li>
              </ul>
            </div>
          </div>
        </div>
      </div>



    )
  };
}            