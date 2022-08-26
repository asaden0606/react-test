import * as React from 'react'
import * as styles from '../scss/styles.module.scss';
import * as THREE from "three";
import $ from 'jquery';

interface IndexPageProps { }

const CAT_VECTOR_SIZE = 2;
const INTERVAL = 50;
export default class TrackingPage extends React.Component<IndexPageProps, {}> {
    mousePosition = new THREE.Vector2(0,0);

    componentDidMount() {
        this.mousePosition = new THREE.Vector2(0, 0);

        $(window).mousemove((event) => {
            this.mousePosition = new THREE.Vector2(event.pageX, event.pageY);
            /*
            let $mouseParent =  $(`.${styles.mouseParent}`);
            $mouseParent.offset({
                left: mousePosition.x,
                top: mousePosition.y,
            });	
            */
        });
    
    

        setInterval(()=>{
            this.action();		
        },INTERVAL);
        
    }




    calcCatPosition() {
        let $catParent = $(`.${styles.trackingParent}`);
        console.log($catParent.position());
        if(!$catParent || !$catParent.position()){
            return new THREE.Vector2(0,0);
        }
        let catPosition = new THREE.Vector2($catParent.position().left, $catParent.position().top);
        if (catPosition.length() == 0) {
            return this.mousePosition;
        }

        let vec = this.mousePosition.clone().sub(catPosition);
        if (vec.length() <= CAT_VECTOR_SIZE * INTERVAL) {
            return this.mousePosition.clone();
        }


        vec.normalize();
        vec.multiplyScalar(CAT_VECTOR_SIZE * INTERVAL);
        return catPosition.add(vec);
    }


    action(){
        let $catParent = $(`.${styles.trackingParent}`);
        let catPos = this.calcCatPosition();
        $catParent.offset({
            left: catPos.x,
            top: catPos.y,
        });	
    }
    




    public render() {
        return (
            <div>
                <div className={styles.trackingParent}>
                    <div className={styles.trackingCircle}>
                    </div>
                </div>
                <div className={styles.mouseParent}>
                    <div className={styles.mouseCircle}>
                    </div>
                </div>
            </div>
        )
    };
}    