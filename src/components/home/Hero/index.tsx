// import CalendlyBtn from './DemoBtn';

import BG from '@/components/home/Hero/BG';

const Hero = () => {
  return (
    <div className='overflow-x-hidden pt-20 md:pt-16'>
      <BG className='dark:hidden' />
      <section className='relative py-12 sm:py-16 lg:py-24'>
        <div className='layout'>
          <div className='flex flex-col items-center gap-5 md:flex-row md:gap-10'>
            <div className='max-w-2xl'>
              <p className='border-border text-text-secondary inline-flex rounded-full border px-4 py-2 text-sm'>
                Made by Investors, for Investors
              </p>

              <h1 className='h-title mt-8'>
                Redefine your investment journey with{' '}
                <span className='text-gradient-secondary'>AI-enhanced</span>{' '}
                analysis
              </h1>

              <p className='text-muted-foreground mt-6 max-w-lg text-base leading-7'>
                Elevate your investment experience with AI driven insights and
                real time market news.
              </p>

              <div className='mt-10 flex flex-col items-center justify-center gap-5 md:flex-row'></div>
              {/* <div className='mt-5 italic'>Project is under developmnet</div> */}

              {/* <Button size='lg' asChild>
              <UnstyledLink href='/pricing'>Choose Plan</UnstyledLink>
            </Button> */}
            </div>

            {/*             <Lottie
              path='/lotties/investment.json'
              className='w-full md:-mr-10 md:-mt-10 lg:min-w-[448px]'
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
