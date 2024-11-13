import Image from 'next/image';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
      <section className=' bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex lg:flex-col xl:w-2/5'>
        <div className='flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12'>
          <Image
            src={'/assets/icons/logo-full.svg'}
            height={82}
            width={224}
            alt='storage-logo'
            className='h-auto '
          />

          <div className='space-y-5 text-white'>
            <h1 className='h1'>The best tool to manage your files</h1>
            <p className='body-1'>
              The only storage you need for all your files.
            </p>
          </div>

          <Image
            src={'/assets/images/files.png'}
            alt='files'
            width={342}
            height={342}
            className='transition-all hover:rotate-2 hover:scale-105'
          />
        </div>
      </section>
      <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
        <div className='mb-16 lg:hidden'>
          <Image
            src='/assets/icons/logo-full-brand.svg'
            alt='logo'
            width={224}
            height={82}
            className='h-auto w-[200px] lg:w-[250px]'
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
