import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { FaLink } from 'react-icons/fa';
import { Drawer } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = {
  Profiles: [
    {
      title: 'Z Prime',
      image: '/images/mp2.jpg',
      description: 'Zama Protus, aka Z_Prime, CEO of Multi_Prime Entertainment, was born on April 16, 1996, in Cameroon. From a young age, Zama displayed a profound passion for entertainment, drawing inspiration from his cultural roots and the vibrant arts scene in his community.',
      description2: 'His early fascination with music and theater prompted him to pursue studies in sports administration, music theory, and performing arts, fostering a diverse skill set crucial for his future endeavors. Driven by a vision to revolutionize the entertainment industry, Zama founded Multi_Prime Entertainment, a company dedicated to amplifying the untapped potential within the arts and culture sectors. His entrepreneurial journey is fueled by a deep-seated commitment to promoting diverse talents and empowering artists to reach their full creative potential. Through strategic partnerships and innovative projects, Zama aims to cultivate a thriving ecosystem where artistic innovation thrives and cultural diversity flourishes.',
     
    },
    {
      title: 'Kelly',
      image: '/images/p4.jpg',
      description: 'Wenjim Kelly Eyah was born on August 11, 2004, in Batibo, Cameroon, to Afuh Kalista E and Afuh Simon W. From a young age, Wenjim demonstrated a unique blend of creativity and determination that would later shape her career path. Standing at a height of 1.66 meters and possessing a striking Umber skin tone, Wenjim has become a captivating presence in the modeling world.',
      description2: 'Wenjim’s educational journey began at GBPS Loum and BCHS Loum, where she developed a strong academic foundation and an appreciation for diverse forms of artistic expression. Currently, she is pursuing her undergraduate studies at the University of Bamenda, balancing her academic commitments with her burgeoning modeling career.',
     
    },
    {
      title: 'Mel Vimin',
      image: '/images/m4.jpg',
      description: 'No info yet!',
      description2: "No info yet!",
    
    },

  ],
  Tracks: [
    {
        title: 'Sidec',
        image: '/images/work5.png',
        description: 'Sidec is a platform that allows users to find questions, book tutors, and take practice exams. In summary, Sidec is a web app that allows students to practice and know how prepared they are for a National Exam. I am pleased to have worked on the front-end',
        description2: 'As the frontend developer of Sidec, I bring to life a vision that goes beyond pixels and code. Our platform is a dynamic canvas where education meets innovation. From personalized mock exams to real-time syllabus courses, every click is a step toward empowering students across Africa.',
        category: 'EdTech',
        client: 'Sidec Inc.',
        projectDate: '2023 to Present',
        projectUrl: 'https://sidecedu.com',
      },
      {
        title: 'Afiacare',
        image: '/images/work.png',
        description: 'Afiacare is dedicated to transforming the healthcare system in Cameroon. Our comprehensive digital platform addresses key challenges such as data mismanagement, donor matching, and information sharing between hospitals. We leverage cutting-edge technology to enhance the accuracy, efficiency, and accessibility of healthcare services.',
        description2: "I worked on the frontend of this platform!",
        category: 'Healthcare',
        client: 'The Afiacare team',
        projectDate: '2024 to Present',
        projectUrl: 'https://afiacare.netlify.app',
      },
      {
        title: 'Smartpro',
        image: '/images/work3.png',
        description: 'This is a smart waste management software, it was just for a school project, but I am looking forward to realizing it.',
        category: 'Web Development',
        client: 'School Project',
        projectDate: '2024 to Present',
        projectUrl: 'https://example.com/project5',
      },
  
    // Add more projects here
  ],
  Beats: [
    {
        title: 'Multiprime',
        image: '/images/work2.png',
        description: 'Multiprime is an entertainment website that deals with promotion of music, model and arts talents.',
        description2: 'I work as Snr Frontend developer at this company, as well as their content writer',
        category: 'Entertainment',
        client: 'Client A',
        projectDate: '2024 to Present',
        projectUrl: 'https://multiprime.org',
      },
      {
        title: 'Urega',
        image: '/images/work6.png',
        description: 'Founded in 2020, the Urega Foundation is a pan-African youth-led NGO founded in the Netherlands with an official branch in Cameroon. Urega was founded to support High school students in Cameroon with full scholarships',
        description2: "I have a double role at Urega where I currently work as Urega's brand manager, I design and ideate their post across social media. I have also worked on the front-end of the website and designing their application process for a seamless application process for aspiring scholars.",
        category: 'Education',
        client: 'The Urega Foundation',
        projectDate: '2022 to Present',
        projectUrl: 'https://urega.org',
      },
      {
        title: 'CodeXtreme',
        image: '/images/work1.png',
        description: 'CodeXtreme is a seasonal 4 days Hackathon that brings together like-minded individuals from all walks of tech to solve problems, network with local and international tech experts and companies, win prizes, and change lives with their tech solutions.',
        category: 'Events and Student development',
        client: 'Codextreme | Nigma',
        projectDate: '2024 to Present',
        projectUrl: 'https://codextremeex.netlify.app/',
      },
  ],
  Shop: [
    {
      title: 'Photo 1',
      image: '/images/about1.jpg',
      description: 'Description 1',
    },
    {
      title: 'Photo 2',
      image: '/images/about2.jpg',
      description: 'Description 1',
    },
    {
      title: 'Photo 3',
      image: '/images/about3.jpg',
      description: 'Description 1',
    },
    {
      title: 'Photo 4',
      image: '/images/about4.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 5',
      image: '/images/about7.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 6',
      image: '/images/about8.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 7',
      image: '/images/about9.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 8',
      image: '/images/about10.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 9',
      image: '/images/about11.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 10',
      image: '/images/about12.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 11',
      image: '/images/about13.jpg',
      description: 'Description 1',
      category: 'Photography',
      client: 'Client D',
      projectDate: '2023-04-01',
      projectUrl: 'https://example.com/photo1',
    },
    {
      title: 'Photo 12',
      image: '/images/about15.jpg',
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
      <div className="bg-white  dark:bg-dark-body transition-colors py-10 px-4 md:px-0 font-inter">
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
              {Object.values(projects).map((projectList, idx) => (
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
                        data-aos-delay={`${index * 100}`} // Adding delay based on index
                        className="bg-white border dark:bg-[#1B1B1A] dark:border dark:border-gray-700 dark:border-solid shadow-lg rounded-lg overflow-hidden hover:translate-y-[-5px] duration-300"
                      >
                        <div className='w-[90%] py-4 mx-auto'>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-md cursor-pointer hover:scale-105 duration-300"
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
                    className="w-full h-96  rounded-lg object-cover"
                  />
                    </div>
              
                </div>
              
              </div>
              <div>
                <h2 className='text-lg font-semibold mt-5 mb-2 text-light-text'>About</h2>
                <p className="text-justify mb-2 font-medium">{selectedProject.description}</p>
                <p className="text-justify">{selectedProject.description2}</p>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='text-[#414760]'>Discover</a>
              </div>
            </div>
          )}
        </Drawer>
      </div>
    );
  };
  
  export default Tabs;