import * as React from 'react'
import FKVPage from './fkv';
import SolutionPage from './solution';



  
interface IndexPageProps {}
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div>
        <FKVPage></FKVPage>
        <SolutionPage></SolutionPage>
      </div>  
    )
  }
}

