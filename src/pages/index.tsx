import * as React from 'react'
import FKVPage from './fkv';
import * as styles from './index.module.scss';



  
interface IndexPageProps {}
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <FKVPage></FKVPage>
    )
  }
}

