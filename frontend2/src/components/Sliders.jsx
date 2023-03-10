import { BsTextCenter } from "react-icons/bs";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  // { url: "../assests/farmer11.jpg" },
  // { url: "../assests/farmer22.jpg" },
  { url: "../assets/slider2.jpg" },
  { url: "../assets/slider4.jpg" },
  { url: "../assets/slider1.jpg" },
  { url: "../assets/slider2.jpg" },
  { url: "../assets/slider3.jpg" },
  // { url: "../assets/Farmer.png" },
  // { url: "../assets/header3.jpg" },
  // { url: "../assets/header4.jpg" },
  // { url: "../assets/header5.jpg" },
  // { url: "../assets/header6.jpg" },
  // { url: "../assests/download.jpg" },
  
];

const Sliders = () => {
  return (
    // <div>
    //   <SimpleImageSlider
    //     // width={1600}
    //     // height={500}
    //     width={2000}
    //     height={500}
    //     images={images}
    //     margin-top={10}
    //     // margin-left={50}
    //     place-item={BsTextCenter}
    //     showBullets={true}
    //     showNavs={true}
    //     autoPlay={true}
    //   />
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.bigbasket.com/media/uploads/banner_images/2209718-bbpl-staples_460_Bangalore.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.bigbasket.com/media/uploads/banner_images/fresho-days-fnv-Bangalore-1600x460-20thSEP22.jpeg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.bigbasket.com/media/uploads/banner_images/YXNP13032-1200X300-280223.jpg " alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    // </div>
  ); 
}

export default Sliders;
