import { Link } from "react-router-dom";
import React from 'react';
import HomeCards from "./HomeCards/HomeCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { motion } from "framer-motion";
import "./Events.css";
import SwiperCore, {EffectCoverflow,Pagination,Navigation} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Events() {

  const items = [
    {
      id: 1,
      name: 'Mr.Engineer',
      image: 'engineer',
      desc: ["Mr.engineer event can help you to enhance your placement skill.","Round 1 :(aptitude test) > Timing : 30 minutes > In round 1, Participants  have to take a aptitude test consist of 20 questions.", "Aptitude test have three sections of questions Arithmetic aptitude, Logical/Reasoning and Technical questions.","Participants who obtain maximum score can advance to the next level.","Round 2:(programming round) > Student who got passed round 1 can participate round 2. Timing: 30mins > 5 program problems are in this round.","Participants who solve maximum problem can advance to the next level.","Round 3 :(Seminar)> Student who got passed round 2 can participate round 3.","Participants are given with a technical topic. They have to give a seminar about the topic for 5minutes"]
    },
    {
      id: 2,
      name: 'Debugging ',
      image: 'debug',
      desc: ["1. Round 1 will be the MCQ challenge. 15 questions will be there and need to solve that in 20 minutes"," 2. Based on the scores, shortlisted members will move to Round 2 where they need to solve 2 coding problems"]
    },
    {
      id: 3,
      name: 'Web Design',
      image: 'web',
      desc:["You will be provided with an Image which you have to recreate.","Try to design it using HTML, CSS ,JS, React or any other libraries or frameworks.","Total time allotted for this event is 1 hr","You can bring your own laptop","Note: Using No code tools like Wordpress are not allowed."]
    },
    {
      id: 4,
      name: 'PPT',
      image: 'ppt',
      desc:['One or two members per team is only allowed.',"Only technical topics should be chosen related to Computer Science.","Abstract should contain 1 to 2 pages.","PPT should contain maximum of 10 slides.","Own project ideas are also welcomed.","Time Duration : 6 to 8 minutes (6 minutes for presentation and next 2 minutes for queries)","Explanation should be in English.","Abstract must be sent to the below email id before specified date (End date : 17-04-2022).","Abstracts will be shortlisted and notified to the respected batch members on 18-04-2022.","Mail your PPT to progenit22@gmail.com","If any queries contact these numbers: Balaji Jayaraman : +91 9384575063 || Sanmathi Kumar : +91 9498828017"]
    },
    {
      id: 5,
      name: 'Googling',
      image: 'google',
      desc: ["Search for information about images on the internet using the search engine Google.","Search the image in  the speed of the neuron","The Act of using Google Search engine is known colloquially as Googling. Due to the dominance of the Google search engine,to google has become a Transitive verb","Duration: 1st round - 10 minutes > 2nd round - 10 minutes.","No of image to be given : 10 for each round.","Rules: Dont use Google lens.Dont use image recognition software."]
    },
    {
      id: 6,
      name: 'Marketing',
      image: 'marketting',
      desc:['You can choose any product or brand and advertise them, The content should be formal, The duration is between 3 to 5 mins']
    },
    {
      id: 7,
      name: 'Photography',
      image: 'photo',
      desc:["Photography is the art, application, and practice of creating durable images by recording light either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.","Photo should be taken by yourself","Send your photo and your details to our Mail/Whatsapp/Instapage is given below.","Editing not permitted.","From 12th April to 19th April.","Result will announce on 20th April."]
    }
    ,
    {
      id: 8,
      name: 'connections',
      image: 'connection',
      desc:["A connection game is a type of abstract strategy game in which players attempt to complete a specific type of connection with their pieces.","This could involve forming a path between two or more endpoints, completing a closed loop, or connecting all of ones pieces so they are adjacent to each other.","Connection games are activities meant to encourage interactions and help build bonds among players.","Examples games include personal trivia, photo challenges, and mingle Bingo.Open up your mind to stay connected with an eye to procure knowledge !!!"]
    }
  ]

  
  return (
    <div className="container">
     
     <div className="card-wrapper">
        <div className="events_hero">
            <h2 className="events_title">Events</h2>
            <Swiper
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={{
              clickable: true
            }}
            className="mySwiper"
          >
              <div className="card">
                
              {items.map((item,index)=>{
                const image = require(`../../Images/Events/${item.image}.jpeg`);
                return(
                  <div key={index}>
                  <SwiperSlide >
                    <div className="image">
                        <img src= {image} alt="loading"/>
                    </div>
                    <div className="title">
                        <h4>{item.name} </h4>
                        <Link to={`/event/${item.id}`} state={items}> 
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="save-button">
                          Read More
                        </motion.button>
                        </Link>   
                    </div>
                  </SwiperSlide> 
                </div> 
                )
                })}
            
            </div>
            
          </Swiper>

          <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
        </div >
        </div>
        <div>
           <HomeCards/>
        </div>        
      </div>
    </div>
   
  );
}
  
