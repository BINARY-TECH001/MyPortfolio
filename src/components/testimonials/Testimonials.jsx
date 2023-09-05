import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css";
import AOS from "aos";
import AVT1 from "../../assets/abu.jpg";
import AVT2 from "../../assets/ade.jpg";
import AVT3 from "../../assets/alameen.png";
import AVT4 from "../../assets/bg.png";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/css/scrollbar'

// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    avatar: AVT1,
    name: "Muritala Abdulrahman",
    review: "Since having our website built by Binary Tech, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Binary and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organised and effective. Thanks to Binary Tech for all your hard work and support."
  },
  {
    id: 2,
    avatar: AVT2,
    name: "Ademola Ishola",
    review: "With Binary Tech's help, we were able to increase the functionality of our website dramatically while cutting our costs. Our Website is much more easy to maintain. We could not be more happy with our new website! Thanks Binary Tech!"
  },
  { 
    id: 3,
    avatar: AVT4,
    name: "Abdulrafiu Mubarak",
    review: "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with Binary Tech customer service has been great. He handle things very efficiently and are available for any questions we have. He also keep us updated on monthly reports so we know how our site is being. I would recommend Binary Tech to anyone looking for website design work!"
  },
  {
    id: 4,
    avatar: AVT3,
    name: "Ibrahim Al-Ameen",
    review: "I went to Binary Tech with a basic 'feel' i wanted in a website.He helped flush out thevisual layout and content. Binary Tech services are bargain when you weigh the cost versus product you receive. I will be using him again in future endeavors. Thanks again! "
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" data-aos="zoom-in-down">
      <h5> Review from clients </h5>
      <h2> Testimonials </h2>
      <div className="underline"></div> 

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({id, avatar, name, review})=>{
          return(
        <SwiperSlide className="testimonial" key={id}>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
            <h5 className='client__name'>{name}</h5>
            <div className="review">
              <FaQuoteLeft className='quote'/>
                <small className='client__review'>
                  {review}
                </small>
                </div>
        </SwiperSlide>
            )
          })
        }
      
      </Swiper>
    </section>
  )
}

export default Testimonials
