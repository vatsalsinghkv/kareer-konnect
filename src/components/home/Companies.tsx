import Image from 'next/image';
import React from 'react';

import { Wrapper } from '../layout';

const Companies = () => {
  return (
    <Wrapper className='py-16 lg:py-20 xl:py-24 relative'>
      <div className='text-center'>
        <h2 className='h1 capitalize'>
          Featured Companies{' '}
          <span className='text-gradient-primary'>actively hiring</span>
        </h2>
        <p className='max-w-lg mx-auto mt-4 leading-relaxed text-muted-foreground'>
          Companies and startups which use our platform
        </p>
      </div>

      <div className='flex flex-wrap items-center justify-center max-w-5xl gap-8 mx-auto mt-12 sm:mt-16 sm:gap-y-12 md:gap-16'>
        <Image
          height={50}
          width={100}
          className='object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44'
          src='https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/4/waverio.svg'
          alt=''
        />
        <Image
          height={50}
          width={100}
          className='object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44'
          src='https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/4/logoipsum.svg'
          alt=''
        />
        <Image
          height={50}
          width={100}
          className='object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44'
          src='https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/4/alterbone.svg'
          alt=''
        />
        <Image
          height={50}
          width={100}
          className='object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44'
          src='https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/4/carbonia.svg'
          alt=''
        />
        <Image
          height={50}
          width={100}
          className='object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-40'
          src='https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/4/tinygone.svg'
          alt=''
        />
        <Image
          height={50}
          width={100}
          className='object-contain w-32 max-w-full sm:h-8 md:h-9 sm:w-40'
          src='https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/4/preso.svg'
          alt=''
        />
        <Image
          height={50}
          width={100}
          className='object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-40'
          src='https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/4/ridoria.svg'
          alt=''
        />
        <Image
          height={50}
          width={100}
          className='object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-40'
          src='https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/4/incanto.svg'
          alt=''
        />
      </div>

      {/*   <div className='max-w-12xl mx-auto mt-8 sm:mt-16'>
        <div className='flex flex-wrap items-center justify-center gap-8 md:gap-x-16 md:gap-y-12'>
          {companies.map(({ name, url, img }) => (
            <div
              className='relative max-w-[10rem] w-full flex justify-center flex-col items-center gap-3 text-center'
              key={url + name}
            >
              <div className='rounded-full shadow-[rgba(100,_100,_111,_0.2)_0px_7px_21px_0px] shadow-primary w-36 h-36 flex overflow-hidden items-center justify-center'>
                <Image
                  width={100}
                  height={100}
                  className='object-contain w-full h-full'
                  src={img}
                  alt={name}
                />
                <UnstyledLink href={url} className='absolute inset-0 z-10' />
              </div>
              <h3 className='h4 mt-3.5 capitalize font-medium'>{name}</h3>
            </div>
          ))}
        </div>
      </div> */}
    </Wrapper>
  );
};
export default Companies;
