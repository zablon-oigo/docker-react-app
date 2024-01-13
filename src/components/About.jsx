import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pawImage from '../assets/images/paw.jpg';
import foundersImage from '../assets/images/founders.jpg';
import team1Image from '../assets/images/team1.jpg';
import team2Image from '../assets/images/team2.jpg';
import team3Image from '../assets/images/team3.jpg';

function About() {
  useEffect(() => {
    AOS.init();
 }, []);
  return (
    <>
      <div className="min-h-[90vh] bg-gradient-to-br from-yellow-50 to-amber-100">
        <div className="md:px-20 md:py-20 px-6 py-6">
          <h2 className="md:text-6xl text-2xl text-center font-extrabold text-amber-500 mb-10">
            Explore Our Pet-Centric World
          </h2>
          <div className="flex md:flex-row-reverse flex-col-reverse items-center justify-between">
            <div className="w-full md:w-2/3" data-aos='fade-left' data-aos-easing="linear" data-aos-duration="1500">
              <img src={pawImage} alt="" className="rounded-xl" />
            </div>
            <div className="w-full md:w-1/3">
              <div className="">
                <h2 className="text-xl mb-4 text-center md:text-start leading-tight text-slate-600">
                  Embark on a journey with Luna and Max, the visionaries behind <span className="text-amber-600">woofs&purrs</span>. Established in 2019, <span className="text-amber-600">woofs&purrs</span> is a passionate team of animal enthusiasts and trainers based in Petropolis, a whimsical town nestled in the heart of the Enchanted Forest.
                </h2>
              </div>
            </div>
          </div>
          <div className="my-10 flex md:flex-row flex-col-reverse gap-x-6 items-center justify-between">
            <div className="w-full md:w-2/4" data-aos='fade-right' data-aos-easing="linear" data-aos-duration="1500">
              <img src={foundersImage} alt="" className="rounded-xl" />
            </div>
            <div className="mb-2 w-full md:w-1/2" data-aos='fade-left' data-aos-easing="linear" data-aos-duration="1500" >
              <h2 className="md:text-4xl text-3xl text-center md:text-start font-semibold text-amber-600">
                Greetings! Meet the Visionaries 🐾
              </h2>
              <p className="mt-4 mb-4 text-xl font-light text-slate-600 leading-tight">
                Join Luna and Max on a magical journey, as they share their tales of companionship and dedication. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu lectus vitae ex aliquet ullamcorper.
              </p>
            </div>
          </div>
          <h2 className="my-10 md:text-6xl text-3xl text-center font-semibold text-amber-600">
            Meet Our Enchanting Team
          </h2>
          {/* Team Member 1 */}
          <div className="my-10 flex md:flex-row flex-col-reverse items-center justify-between">
            <div className="w-full md:w-2/4" data-aos='fade-right' data-aos-easing="linear" data-aos-duration="1500">
              <img src={team1Image} alt="" className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/5" data-aos='fade-left' data-aos-easing="linear" data-aos-duration="1500">
              <h2 className="text-2xl font-semibold text-amber-700 mb-4">
                Rocky Thunderpaws
              </h2>
              <p className="text-amber-900 text-md font-light">
                Fairy Pet Trainer 🐕
              </p>
              <p className="mt-4 mb-4 text-xl font-light text-slate-600 leading-tight">
                Unleashing the magic of positive reinforcement, Aurora ensures every pet learns with joy and sparkles. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nunc vitae tristique aliquet.
              </p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="my-10 flex md:flex-row-reverse flex-col-reverse items-center justify-between">
            <div className="w-full md:w-2/4"data-aos='fade-left' data-aos-easing="linear" data-aos-duration="1500">
              <img src={team2Image} alt="" className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/5" data-aos='fade-right' data-aos-easing="linear" data-aos-duration="1500">
              <h2 className="text-2xl font-semibold text-amber-700 mb-4">
                Ziggy Stardustpaw
              </h2>
              <p className="text-amber-900 text-md font-light">
                Astro Cat Trainer 🐈
              </p>
              <p className="mt-4 mb-4 text-xl font-light text-slate-600 leading-tight">
                Ziggy brings the cosmic touch to pet training, guiding furry friends with celestial wisdom. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ut orci vel risus facilisis posuere.
              </p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="my-10 flex md:flex-row flex-col-reverse items-center justify-between">
            <div className="w-full md:w-2/4" data-aos='fade-right' data-aos-easing="linear" data-aos-duration="1500">
              <img src={team3Image} alt="" className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/5" data-aos='fade-left' data-aos-easing="linear" data-aos-duration="1500">
              <h2 className="text-2xl font-semibold text-amber-700 mb-4" >
              Aurora Sparkleheart
              </h2>
              <p className="text-amber-900 text-md font-light">
                Adventure Dog Trainer 🐶
              </p>
              <p className="mt-4 mb-4 text-xl font-light text-slate-600 leading-tight">
                Rocky, the explorer at heart, trains dogs to embrace every adventure with boundless enthusiasm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, velit vitae eleifend aliquam, dui nulla facilisis turpis, id cursus tortor justo ac eros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
