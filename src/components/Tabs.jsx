import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { FaLink } from 'react-icons/fa';
import { Drawer } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = {
  Blogs: [
    {
      title: ' Kelly Shines in Stunning New Photo Shoot',
      image: '/images/kellyblog.jpg',
      description: "At Multiprime, we take immense pride in showcasing not just the talent of our models but also the dynamic essence of our brand. Today, we’re thrilled to spotlight Kelly, a model who has been an integral part of our team for the past three years. Her latest photo shoot, captured by the talented Light Man Pictures, is a testament to both her exceptional beauty and our brand's commitment to excellence.",
      description2: "In this striking series of images, Kelly exudes confidence and grace in a stunning bikini, highlighting her remarkable physique and radiant dark skin. This photo is not only a celebration of Kelly’s individuality but also a showcase of the diverse beauty that our brand champions.",
    },
    
    
  ],
  Profiles: [
    {
      title: 'Z Prime',
      image: '/images/mp2.jpg',
      role: 'CEO',
      description: 'Zama Protus, aka Z_Prime, CEO of Multi_Prime Entertainment, was born on April 16, 1996, in Cameroon. From a young age, Zama displayed a profound passion for entertainment, drawing inspiration from his cultural roots and the vibrant arts scene in his community.',
      description2: 'His early fascination with music and theater prompted him to pursue studies in sports administration, music theory, and performing arts, fostering a diverse skill set crucial for his future endeavors. Driven by a vision to revolutionize the entertainment industry, Zama founded Multi_Prime Entertainment, a company dedicated to amplifying the untapped potential within the arts and culture sectors. His entrepreneurial journey is fueled by a deep-seated commitment to promoting diverse talents and empowering artists to reach their full creative potential. Through strategic partnerships and innovative projects, Zama aims to cultivate a thriving ecosystem where artistic innovation thrives and cultural diversity flourishes.',
    },
    {
      title: 'Kelly',
      image: '/images/p4.jpg',
      role: 'Model',
      description: 'Wenjim Kelly Eyah was born on August 11, 2004, in Batibo, Cameroon, to Afuh Kalista E and Afuh Simon W. From a young age, Wenjim demonstrated a unique blend of creativity and determination that would later shape her career path. Standing at a height of 1.66 meters and possessing a striking Umber skin tone, Wenjim has become a captivating presence in the modeling world.',
      description2: 'Wenjim’s educational journey began at GBPS Loum and BCHS Loum, where she developed a strong academic foundation and an appreciation for diverse forms of artistic expression. Currently, she is pursuing her undergraduate studies at the University of Bamenda, balancing her academic commitments with her burgeoning modeling career.',
    },
    {
      title: 'Mel Vimin',
      image: '/images/m4.jpg',
      role: 'Artist',
      description: 'No info yet!',
      description2: "No info yet!",
    },
  ],
  Releases: [
    {
        title: 'Trickstar',
        image: '/images/trickstar.png',
        description: 'Trickstar" blends old-school beats with modern production, featuring hard-hitting drums, catchy bass, and intricate urban melodies.',
        description2: 'Hip Hop',
      
      },
      {
        title: 'Hard drill',
        image: '/images/hard_drille.png',
        description: '"Hard Drill" features deep 808s, sharp hi-hats, punchy snares, and dark melodies, creating intense, gritty drill energy.',
        description2: "Drill",
    
      },
      {
        title: 'Time no dey',
        image: '/images/time_no_dey.png',
        description: '"TND" combines Afrobeat rhythms with Amapiano grooves, featuring rolling basslines, syncopated percussion, and lush, airy keys.',
        description2: "Afrobeat",
      },
  
    // Add more projects here
  ],

  Shop: [
    {
      title: 'Photo 1',
      image: '/images/_DSC5299.jpg',
      description: 'Description 1',
    },
    {
      title: 'Photo 2',
      image: '/images/m2N.jpg',
      description: 'Description 1',
    },
    {
      title: 'Photo 3',
      image: '/images/mp2.jpg',
      description: 'Description 1',
    },
    {
      title: 'Photo 4',
      image: '/images/shop.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 5',
      image: '/images/shop1.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
  
    // Add more projects here
  ],
};
const Tabs = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openDrawer = (project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-white dark:bg-dark-body transition-colors py-10 px-4 md:px-0 font-inter">
      <div className="w-full md:w-4/5 mx-auto">
        <Tab.Group>
          <Tab.List className="flex space-x-1 bg-white border dark:border-none rounded-lg dark:bg-[#1B1B1A] p-1">
            {Object.keys(projects).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full py-2 text-sm leading-5 font-medium text-[#FF5722] dark:text-slate-100 rounded-lg outline-none duration-300
                  ${selected ? 'border border-[#FF5722] dark:border-gray-700 dark:border-solid shadow' : 'text-[#FF5722] hover:bg-slate-300/[0.12] dark:hover:bg-white/[0.12] dark:hover:text-white'}`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {Object.entries(projects).map(([category, projectList], idx) => (
              <Tab.Panel
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {projectList
                  .slice(0, showMore ? projectList.length : 4)
                  .map((project, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay={`${index * 100}`}
                      className={`bg-white border dark:bg-[#1B1B1A] dark:border dark:border-gray-700 dark:border-solid shadow-lg rounded-lg overflow-hidden hover:translate-y-[-5px] duration-300 ${
                        category === 'Profiles'
                          ? 'flex items-center'
                          : ''
                      }`}
                    >
                      {category === 'Profiles' ? (
                        <div className="flex flex-col md:flex-row ">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-12 h-12 ml-4 mt-4 object-cover rounded-full object-top"
                          />
                          <div className="py-2 px-6 md:px-2 md:py-2">
                            <h3 className="text-lg font-medium text-light-text dark:text-white">{project.title}</h3>
                            <p className="text-sm font-medium text-[#FF5722] dark:text-gray-400">{project.role}</p>
                            <p className="text-light-text dark:text-gray-400 text-xs hidden md:block">{truncateDescription(project.description, 20)}</p>
                            <p className="text-light-text dark:text-gray-400 text-sm block md:hidden">{truncateDescription(project.description, 80)}</p>
                            <button
                              className="flex font-medium text-[13px] items-center mt-2 text-[#FF5722] dark:text-gray-200"
                              onClick={() => openDrawer(project)}
                            >
                              <FaLink className="mr-2" />
                              <span>Read More</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className='w-[90%] py-4 mx-auto'>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover rounded-md cursor-pointer object-top hover:scale-105 duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-medium text-light-text dark:text-white">{project.title}</h3>
                            <p className="text-light-text dark:text-gray-400 text-sm hidden md:block">{truncateDescription(project.description, 28)}</p>
                            <p className="text-light-text dark:text-gray-400 text-sm block md:hidden">{truncateDescription(project.description, 80)}</p>
                            <button
                              className="flex font-medium text-[13px] items-center mt-4 text-[#FF5722] dark:text-gray-200"
                              onClick={() => openDrawer(project)}
                            >
                              <FaLink className="mr-2" />
                              <span>Read More</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                {projectList.length > 4 && (
                  <button
                    onClick={toggleShowMore}
                    className="mt-4 px-4 py-2 text-[#FF5722] dark:text-gray-200 border dark:border-gray-700 dark:border-solid rounded-md"
                  >
                    {showMore ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      <Drawer
        title={selectedProject?.title}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerOpen}
        width={700}
        className='font-inter'
      >
        {selectedProject && (
          <div>
            <div className='flex flex-col md:flex-row items-center gap-4'>
              <div className='w-full md:w-1/2 pt-4 '>
                  <div className='w-full h-96'>
                  <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96  rounded-lg object-cover object-top cursor-pointer hover:scale-105 duration-300"
                />
                  </div>
            
              </div>
            
            </div>
            <div>
              <h2 className='text-lg font-semibold mt-5 mb-2 text-light-text'>About</h2>
              <p className="text-justify mb-2 font-medium">{selectedProject.description}</p>
              <p className="text-justify mb-4">{selectedProject.description2}</p>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='text-[#414760] border mt-4 font-medium py-2 px-4 border-gray-700 border-solid rounded'>Discover</a>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Tabs;