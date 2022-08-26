import * as React from 'react'
import CompanyPage from './company';
import ContactPage from './contact';
import FKVPage from './fkv';
import FooterPage from './footer';
import InformationPage from './information';
import SolutionPage from './solution';
const ScrollOut = require('scroll-out');
import * as styles from '../scss/styles.module.scss';
import TrackingPage from './tracking';

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


  }


  public render() {
    return (
      <div>
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/lib/lightbox2/css/lightbox.min.css" />
        <link rel="stylesheet" href="/lib/textillate/animate.css" />


        <TrackingPage></TrackingPage>
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

