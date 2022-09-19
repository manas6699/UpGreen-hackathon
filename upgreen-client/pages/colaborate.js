import Image from 'next/image'
import mypic1 from '../asset/plastic.jpg'
import mypic2 from '../asset/ewaste.jpg'
import mypic3 from '../asset/tree.jpg'

import classes from '../styles/Colaborate.module.css'

import Donate from '../componenets/brand/donate'

import Footer from '../componenets/footer/Footer'


const Colaborate = () => {

    return (
        <div className="container">
            <div className={classes.lineawrapper}>
                <h5>Sustainably-marketed products across categories are growing market share a whopping seven times faster than their conventional counter-parts. Learn how your procurement strategy can be a tool for increasing market share.</h5>
            </div>

            <div className={classes.imageWrapper}>

                <div>
              <Image width="300px"
                height="180px" src={mypic1}/> 
                </div>
                <div> 
                <Image width="300px"
                height="180px" src={mypic2} />
</div>

<div>
                <Image width="300px"
                height="180px" src={mypic3} />
</div>
            </div>

            <Donate/>
            <Footer/>
        </div>
    )


}


export default Colaborate