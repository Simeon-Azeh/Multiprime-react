import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbProgressCheck } from "react-icons/tb"
import { MdArrowOutward } from "react-icons/md";

const Membership = () => {
  const { t } = useTranslation();

  const advantages = [
    t('membership_advantage_1'),
    t('membership_advantage_2'),
    t('membership_advantage_3'),
    t('membership_advantage_4'),
    t('membership_advantage_5')
  ];

  return (
    <div className="bg-white dark:bg-dark-body transition-colors py-10 px-4 md:px-0 font-inter">
      <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/images/Membership.png"
            alt={t('membership_image_alt')}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 bg-white dot-pattern dark:bg-[#141414] shadow-lg border p-8 rounded-lg">
          <h2 className="text-2xl font-medium mb-4 text-light-text dark:text-white">
            {t('membership_title')}
          </h2>
          <ol className=" ml-4 space-y-2 text-light-text dark:text-gray-300">
            {advantages.map((advantage, index) => (
              <li key={index} className='flex items-center gap-2 text-justify border-b pb-4'><TbProgressCheck size={20}  /> {advantage}</li>
            ))}
             <div className="mt-8 ">
        <a
          href="#"
          className=" text-[#FF5722] dark:text-slate-300 font-medium py-3 rounded-lg flex items-center gap-1 hover:text-[#eb7450] dark:hover:text-slate-500 transition-colors"
        >
          {t('membership_join_button')}
          <MdArrowOutward />
        </a>
      </div>
          </ol>
        </div>
      </div>
     
    </div>
  );
};

export default Membership;
