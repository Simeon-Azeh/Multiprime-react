import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';
import { CirclePlay, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useEffect(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section id="highlights" className="w-screen h-full overflow-hidden common-padding bg-zinc-100 dark:bg-[#171716]">
      <div className="screen-max-width">
        <div className="items-end justify-between w-full mb-12 md:flex">
          <h1 id="title" className="text-gray-700 section-heading dark:text-gray-300">Why choose Multiprime?</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="flex items-center gap-1 text-gray-700 link dark:text-gray-300">
              Watch the film
              <CirclePlay size={18} />
            </p>
            <p className="flex items-center gap-1 text-gray-700 link dark:text-gray-300">
              Watch the event
              <ChevronRight size={18} />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;