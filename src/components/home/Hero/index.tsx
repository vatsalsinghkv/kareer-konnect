// import CalendlyBtn from './DemoBtn';
import BG from "@/components/home/Hero/BG";
import { UnstyledLink } from "@/components/shared/links";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="overflow-x-hidden pt-20 md:pt-16">
      <BG className="dark:hidden" />
      <section className="relative py-12 sm:py-16 lg:py-24">
        <div className="layout">
          <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
            <div className="max-w-2xl">
              <p className="border-border text-text-secondary inline-flex rounded-full border px-4 py-2 text-sm">
                Built for Graduates, by Graduates
              </p>

              <h1 className="h-title mt-8">
                Empower your career with{" "}
                <span className="text-gradient-secondary">AI-driven</span> job
                matchmaking
              </h1>

              <p className="text-muted-foreground mt-6 max-w-sm md:max-w-lg md:leading-7">
                Unlock job opportunities across private, government, and
                international sectors. Access internships, mentorship, and
                career guidance all in one place.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row"></div>
              {/* <div className='mt-5 italic'>Platform development in progress</div> */}

              <Button size="lg" asChild>
                <UnstyledLink href="/signup">Get Started</UnstyledLink>
              </Button>
            </div>

            {/* <Lottie
              path='/lotties/about.json'
              className='w-full md:-mr-10 md:-mt-10 lg:min-w-[448px]'
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
