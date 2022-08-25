import * as React from 'react'
import CompanyPage from './company';
import FKVPage from './fkv';
import SolutionPage from './solution';



  
interface IndexPageProps {}
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div>
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/lib/lightbox2/css/lightbox.min.css"/>
        <link rel="stylesheet" href="/lib/textillate/animate.css"/>


        <script type="text/javascript" src="/lib/jquery/jquery.js"></script>
        <script src="https://unpkg.com/scroll-out/dist/scroll-out.min.js"></script>
        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
        <script type="text/javascript" src="/lib/three/three.js"></script>
        <script type="text/javascript" src="/lib/textillate/jquery.lettering.js"></script>
        <script type="text/javascript" src="/lib/textillate/jquery.fittext.js"></script>
        <script type="text/javascript" src="/lib/textillate/jquery.textillate.js"></script>
        <script type="text/javascript" src="/lib/inview/jquery.inview.min.js"></script>
        <script type="text/javascript" src="/js/common.js"></script>
        <FKVPage></FKVPage>
        <SolutionPage></SolutionPage>
        <CompanyPage></CompanyPage>
      </div>  
    )
  }
}

