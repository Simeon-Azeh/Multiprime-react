import React from 'react';
import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <Carousel autoplay className="lg:w-4/5 mx-auto bg-[#FF5722] dark:bg-dark-body font-inter rounded">
      <div>
        <div className="min-h-[10rem] flex items-center justify-center text-white text-center bg-light-primary dark:bg-dark-primary p-4">
          <div>
            <p className="text-base font-normal">{t('testimonial_1_quote')}</p>
            <p className="mt-2 text-sm text-slate-50 font-light">{t('testimonial_1_author')}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="min-h-[10rem] flex items-center justify-center text-white text-center bg-light-primary dark:bg-dark-primary p-4">
          <div>
            <p className="text-base font-normal">{t('testimonial_2_quote')}</p>
            <p className="mt-2 text-sm text-slate-50 font-light">{t('testimonial_2_author')}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="min-h-[10rem] flex items-center justify-center text-white text-center bg-light-primary dark:bg-dark-primary p-4">
          <div>
            <p className="text-base font-normal">{t('testimonial_3_quote')}</p>
            <p className="mt-2 text-sm text-slate-50 font-light">{t('testimonial_3_author')}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="min-h-[10rem] flex items-center justify-center text-white text-center bg-light-primary dark:bg-dark-primary p-4">
          <div>
            <p className="text-base font-normal">{t('testimonial_4_quote')}</p>
            <p className="mt-2 text-sm text-slate-50 font-light">{t('testimonial_4_author')}</p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonial;
