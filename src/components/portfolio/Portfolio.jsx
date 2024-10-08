import "aos/dist/aos.css";
import "./portfolio.css";
import AOS from "aos";
import Github from "../../assets/GithubSearch.JPG";
import socialUi from "../../assets/socialUi.png";
import React from "react";
import wordle from "../../assets/wordle.JPG";
import ecommerce from "../../assets/ecommerce.png"
import bitzsales from "../../assets/bitzsales.png"
import blog from "../../assets/blog.png"
import valuwise from "../../assets/valuwise.png"

// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    img: ecommerce,
    title: "Ecommerce Website",
    github: "https://github.com/BINARY-TECH001/E_commerceClient",
    desc: "I built a React.js eCommerce platform with a responsive UI, real-time updates, and smooth checkout. Features include a customizable catalog, secure payments, and an intuitive admin dashboard, ensuring a seamless user experience.",
    demo: "https://ecommbybinary.vercel.app/"
  },
  {
    id: 'Ecommerce Admin',
    img: bitzsales,
    title: "Ecommerce Admin Management System",
    github: "https://github.com/BINARY-TECH001/Bitzsales",
    desc: "I Developed an eCommerce Admin Management System with Next.js, Tailwind CSS, and MongoDB. It features a sleek UI, efficient inventory management, real-time updates, and secure data handling for optimal administrative control.",
    demo: "https://bitzsales.vercel.app/"
  },
  {
    id: 2,
    img: socialUi,
    title: "Binary Social Media Application UI",
    github: "https://github.com/BINARY-TECH001/SocialMedia-UI",
    desc: "A Web Social media User Interface designed using React.Js. It contains the authentication pages (Login & Register), Story/Home page, comment, like, post and profile page.",
    demo: "https://socialuibybinary.vercel.app/"
  },
  {
    id: 2,
    img: valuwise,
    title: "ValuWise - Track Product Prices Effortlessly",
    github: "https://github.com/BINARY-TECH001/PriseWise",
    desc: "A Web App Built with Next.js, this app offers powerful, self-serve product and growth analytics. It tracks product price changes and sends notifications mail, helping users buy when prices drop and optimize their purchases effectively.",
    demo: "https://valuwise.vercel.app//"
  },
  {
    id: 3,
    img: blog,
    title: "Binary Blog",
    github: "https://github.com/BINARY-TECH001/BINARY-BLOG",
    desc: "I Created a blog site using React.js, featuring a modern, responsive design and intuitive navigation. It supports dynamic content management, real-time updates, and a seamless user experience for readers and authors alike.",
    demo: "https://blogbybinary.vercel.app/"
  },
  {
    id: 9,
    img: wordle,
    title: "Wordle Game",
    github: "https://github.com/BINARY-TECH001/",
    desc: "Cloning of web-based word guessing game that allow users to guess a word five times and show different colors to show if its correct, or the letter is there and wrong placed or the word is totally incorrect with a cool modal after five times try that tells whether ypu're right or correc.",
    demo: "#"
  },
  {
    id: 8,
    img: Github,
    title: "Github Uaer Search",
    github: "https://github.com/BINARY-TECH001/React-GithubUser",
    desc:  "Web application that enables users to search for github users, view their followers, gist, repositories and also folow them on github.",
    demo: "#"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Works </h5>
      <h2> Portfolio </h2>
      <div className="underline"></div>

      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo, desc})=>{
            return(
          <article className="portfolio__item" key={id} data-aos="flip-left">
          <div className="portfolio__item-image">
            <img src={img} alt={title} />
          </div>
          <h3> {title} </h3>
          <p className='porfolio__desc'> {desc}</p>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href={demo} className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio