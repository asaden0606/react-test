import * as React from 'react'
import CompanyPage from './company';
import ContactPage from './contact';
import FKVPage from './fkv';
import FooterPage from './footer';
import InformationPage from './information';
import SolutionPage from './solution';
const ScrollOut = require('scroll-out');
import * as styles from '../scss/styles.module.scss';


interface IndexPageProps { }

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  componentDidMount() {
    ScrollOut({
      targets: styles.jsfade,
      threshold: 0.5,
      once: "true",
      offsetY: 400
    });
    ScrollOut({
      targets: styles.jsfadeup,		
      threshold: 0.5,
      once: "true",
      offsetY: 400
    });   
    ScrollOut({
      targets: styles.jsfadeleft,
      threshold: 0.5,
      once: "true",
      offsetY: 400
    });
  
    ScrollOut({
      targets: styles.jsfadedown,
      threshold: 0.5,
      once: "true",
      offsetY: 400
    });   
    ScrollOut({
      targets: styles.jsfaderight,
      threshold: 0.5,
      once: "true",
      offsetY: 400
    });    


    /*
    $(styles.animation).on('inview',function(){	
      console.log("inview");
      const $this:any = $(this);
      $this.textillate({ 
        initialDelay: 0,
        in: { effect: 'bounceInDown' } 
      });			
      $(this).css("opacity",1);	
    })
    */
  }


  public render() {
    return (
      <div>
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/lib/lightbox2/css/lightbox.min.css" />
        <link rel="stylesheet" href="/lib/textillate/animate.css" />


        <script type="text/javascript" src="/lib/three/three.js"></script>
        <script type="text/javascript" src="/js/common.js"></script>
        <FKVPage></FKVPage>
        <SolutionPage></SolutionPage>
        <CompanyPage></CompanyPage>
        <InformationPage></InformationPage>
        <ContactPage></ContactPage>
        <FooterPage></FooterPage>
      </div>
    )
  }
}

