import "aos/dist/aos.css";
import "./services.css";
import AOS from "aos";
import { CiMobile1 } from "react-icons/ci";
import { FaConnectdevelop } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { MdGraphicEq } from "react-icons/md";

// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    Icon: FaConnectdevelop,
    title: "Web Design",
    desc: "I have a passsion for creating visually appealing and user-friendly websites that meet the needs of my clients",
    color: "red",
    aos: "fade-right",
  },
  {
    id: 2,
    Icon: FaCode,
    title: "Web Development",
    desc: "I have experience creating and maintaining websites for both personal and professional projects",
    color: "green",
    aos: "fade-left",
  },
  {
    id: 3,
    Icon: MdDevicesOther,
    title: "Responsive Design",
    desc: "I am highly skilled in creating websites that adapt seamlessly to different devicesa and screen sizes",
    color: "blue",
    aos: "fade-right",
  },
  {
    id: 4,
    Icon: FaPencilRuler,
    title: "UI/UX Design",
    desc: "I am passionate about creating intuitive and visually appealing digital experiences for users",
    color: "orange",
    aos: "fade-left",
  },
  {
    id: 5,
    Icon: MdGraphicEq,
    title: "Graphics Design",
    desc: "I am a graphics designer, skilled in creating visually stunning designs for a variety of media",
    color: "purple",
    aos: "fade-right",
  },
  {
    id: 6,
    Icon: CiMobile1,
    title: "Mobile App Design",
    desc: "I am specialize in creating intuitive and visually appealing interfacec for users to interact with",
    color: "#4db5ff",
    aos: "fade-left",
    },
]

const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer </h5>
      <h2> Services </h2>
      <div className="underline"></div>

      <div className="container portfolio_container">
        {
          data.map(({id, Icon, title, desc, color, aos})=>{
            return(
            <article className="portfolio_item" key={id} data-aos={aos}>
              <Icon className='icon'/>
              <h3 className='service__title'> {title} </h3>
              <span>{desc}</span>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services