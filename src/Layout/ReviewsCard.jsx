import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {IoMdArrowDropright} from "react-icons/io";
import walking from '../assets/images/walking.jpg'
import grooming from '../assets/images/grooming.jpg'
import training from '../assets/images/training.jpg'
import cuddling from '../assets/images/cuddling.jpg'
import playing from '../assets/images/playing.jpg'
function ReviewsCard() {
  useEffect(() => {
    AOS.init();
 }, []);

  const card = [
    {
      id: 1,
      title: 'Training Exercises',
      image:training,
      description: 'Implementing basic training commands not only strengthens the bond between you and your pet but also provides mental stimulation and a sense of accomplishment.',
    },
    {
      id: 2,
      title: 'Grooming Sessions',
      image:grooming,
      description: 'Brushing, bathing, and nail trimming are essential grooming activities that not only maintain your pet\'s hygiene but also create bonding moments between you and your pet.',
    },
    {
      id: 3,
      title: 'Daily Walks',
      image:walking,
      description: 'Ensure your pet\'s well-being with invigorating daily walks. These outdoor adventures provide exercise, mental stimulation, and an opportunity for your pet to explore the world around them.',
    },
    {
      id: 4,
      title: 'Grooming Sessions',
      image:grooming,
      description: 'Brushing, bathing, and nail trimming are essential grooming activities that not only maintain your pet\'s hygiene but also create bonding moments between you and your pet.',
    },
    {
      id: 5,
      title: 'Quiet Cuddling Time',
      image:cuddling,
      description: 'Dedicate some time for quiet and calm moments with your pet, whether it\'s cuddling on the couch, gentle petting, or simply spending quality time together.',
    },
    {
      id: 6,
      title: 'Playtime Sessions',
      image:playing,
      description: 'Engage in interactive play sessions with your pet to keep them physically active and mentally stimulated. Whether it\'s playing fetch, using toys, or other games, these sessions contribute to your pet\'s happiness.',
    },
  ];

  return (
       <>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-6">
      {card.map((item) => (
        <div className="group hover:scale-105 transition-transform duration-500 translate-y-2" key={item.id}>
        <div className=""data-aos='fade-up' data-aos-duration='1500' data-easing='linear'>
        <img src={item.image} alt="" className="rounded-t-xl object-cover object-center h-[200px] w-[400px]" />
           <div className="px-4 shadow-xl group-hover:bg-amber-500 bg-white rounded-b-xl  flex flex-col itmes-center gap-2">
            
           <h2 className="text-xl font-semibold group-hover:text-white text-gray-700 capitalize mt-3">{item.title}</h2>
          <p className="font-light text-lg leading-tight group-hover:text-white text-gray-400">{item.description}</p>
          <div className="flex justify-start w-full mb-4">
          <button className="flex items-center justify-center group-hover:text-white text-gray-500">
                        view more
                    <IoMdArrowDropright className='text-2xl mt-1'/>
                    </button>
          </div>
           </div>
        </div>
        </div>
      ))}
 </div>
       </>
     

  );
}

export default ReviewsCard;
