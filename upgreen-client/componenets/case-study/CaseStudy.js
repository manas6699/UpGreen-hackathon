import classes from './CaseStudy.module.css';
import Image from 'next/image'
import mypic1 from '../../asset/casestudy.png'
import mypic2 from '../../asset/casestudy2.png'

const CaseStudy = () => {

  return (
    <div className={classes.casestudy}>
      <div className="container p-5">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">


              <div className={classes.imagewrapper}>
                <Image 
                  src={mypic1}
                  alt="Picture of the author"
                // width="2800px"
                // height="550px"
                // layout='responsive'
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className={classes.imagewrapper}>
                <Image className={classes.pictureStyle}
                  src={mypic2}
                  alt="Picture of the author"
                // width="2800px"
                // height="550px"
                // layout='responsive'
                />
              </div>
            </div>
           
          </div>
          <button className={`carousel-control-prev ${classes.buttonStyle}`} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className={`carousel-control-next ${classes.buttonStyle}`} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  )
}


export default CaseStudy