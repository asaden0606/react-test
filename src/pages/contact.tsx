import * as React from 'react'
import * as styles from '../scss/styles.module.scss';

interface IndexPageProps { }
export default class ContactPage extends React.Component<IndexPageProps, {}> {
    public render() {
        return (
            <div className={`${styles.block} ${styles.contact} ${styles.reverse}`}>
                <h2 id="contact" className={`${styles.subtitle} ${styles.animation}`}>Contact</h2>
                <h3 className={styles.subtitlesupport}>お問い合わせ</h3>
                <div className={styles.contactform}>
                    <div className={styles.contactrow}>
                        <h2 className={styles.contactheader}>
                            <span>お名前</span>
                        </h2>
                        <div className={styles.contactvalue}>
                            <span className={styles.wpcf7formcontrolwrap} data-name="your-name">
                                <input type="text" name="your-name" value="" className="wpcf7formcontrol wpcf7text wpcf7validatesasrequired" aria-required="true" aria-invalid="false" />
                            </span>
                        </div>
                    </div>
                    <div className={styles.contactrow}>
                        <h2 className={styles.contactheader}>
                            <span>会社名</span>
                        </h2>
                        <div className={styles.contactvalue}>
                            <span className="wpcf7-form-control-wrap" data-name="your-company">
                                <input type="text" name="your-company" value="" className="wpcf7formcontrol wpcf7text wpcf7validatesasrequired" aria-required="true" aria-invalid="false" />
                            </span>
                        </div>
                    </div>
                    <div className={styles.contactrow}>
                        <h2 className={styles.contactheader}>
                            <span>Email</span>
                        </h2>
                        <div className={styles.contactvalue}>
                            <span className="wpcf7-form-control-wrap" data-name="your-email">
                                <input type="email" name="your-email" value="" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" />
                            </span>
                        </div>
                    </div>
                    <div className={`${styles.contactrow} ${styles.top}`}>
                        <h2 className={styles.contactheader}>
                            <span>お問い合わせ内容</span>
                        </h2>
                        <div className={styles.contactvalue}>
                            <span className="wpcf7-form-control-wrap" data-name="your-message">
                                <textarea name="your-message" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false">
                                </textarea>
                            </span>
                        </div>
                    </div>
                    <div className={styles.contactsubmit}>
                        <input type="submit" value="送信" className="wpcf7-form-control has-spinner wpcf7-submit" />
                        <span className="wpcf7-spinner"></span>
                    </div>
                </div>
                <div className="wpcf7-response-output" aria-hidden="true"></div>
            </div >
        )
    }
}