import React from 'react';
import {IoMdArrowDropright} from "react-icons/io";
import walking from '../assets/images/walking.jpg'
import grooming from '../assets/images/grooming.jpg'
import training from '../assets/images/training.jpg'
import cuddling from '../assets/images/cuddling.jpg'
import playing from '../assets/images/playing.jpg'
function ReviewsCard() {

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
    <div className="grid md:grid-cols-3  grid-cols-1">
      {card.map((item) => (
        <div className="shadow-2xl  w-full" key={item.id}>
          <img src={item.image} alt="" className="rounded-t-xl" />
           <div className="bg-white rounded-b-xl   rounded-xl flex flex-col itmes-center gap-2">
            
           <h2 className="text-xl font-semibold text-gray-700 capitalize">{item.title}</h2>
          <p className="font-light text-lg leading-tight text-gray-400">{item.description}</p>
          <div className="flex justify-start w-full mt-4">
          <button className="flex items-center justify-center text-gray-500">
                        view more
                    <IoMdArrowDropright className='text-2xl mt-1'/>
                    </button>
          </div>
           </div>
        </div>
      ))}
 </div>
       </>
     

  );
}

export default ReviewsCard;
