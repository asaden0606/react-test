import * as React from 'react'
import * as styles from '../scss/styles.module.scss';

  
interface IndexPageProps {}
  
export default class TopFirstPage extends React.Component<IndexPageProps, {}> {
    public render() {
        return (
            <div className={styles.topfirst}>
            <div className={`${styles.topfirsttitle} ${styles.jsfadeup}`}  data-scroll="out">
                <img src="http://localhost/wordpress/wp-content/uploads/2022/08/top-fkv-logo.svg" alt="" /></div>
            </div>
        ) 
    };
}    