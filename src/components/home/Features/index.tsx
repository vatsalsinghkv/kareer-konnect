'use client';
import { BookOpen, Briefcase, GraduationCap, Target } from 'lucide-react';
import Image from 'next/image';

import { FeatureType } from '@/lib/types';

import { Wrapper } from '@/components/layout';

import Feature from './Feature';

const Features = () => {
  return (
    <Wrapper id='features'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='mt-16 mb-6 h1'>
          Helping Graduates{' '}
          <span className='text-gradient-primary'>Bridge the Gap</span> between
          Education and Employment.
        </h2>

        <p className='max-w-lg mx-auto mt-4 leading-relaxed text-muted-foreground'>
          Unlock your potential with our AI-driven platform that connects you
          with job opportunities, internships, and mentorship programs across
          the private, government, and international sectors.
        </p>
      </div>

      <div className='grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-7 sm:mt-20 gap-x-4'>
        <div className='space-y-8 lg:pr-16 xl:pr-24 lg:col-span-3 lg:space-y-12'>
          <div className='mt-4 lg:order-1 sm:mt-0 space-y-5'>
            {features.slice(0, 3).map((feat) => (
              <Feature key={feat.id} {...feat} />
            ))}
          </div>
        </div>

        <div className='lg:col-span-4'>
          <Image
            width={750}
            height={750}
            className='w-full rounded-lg shadow-xl'
            src='https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png'
            alt='Platform Dashboard'
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;

export const features: FeatureType[] = [
  {
    id: 'f1',
    name: 'AI-Driven Job Matchmaking',
    description:
      'Our advanced algorithms connect you with job opportunities tailored to your skills, qualifications, and preferences.',
    icon: Target,
  },
  {
    id: 'f2',
    name: 'Access to Diverse Job Markets',
    description:
      'Gain access to private, government, and international job opportunities with regularly updated listings.',
    icon: Briefcase,
  },
  {
    id: 'f3',
    name: 'Career Counseling & Guidance',
    description:
      'Get personalized counseling and resources, including resume building, interview preparation, and career advice.',
    icon: BookOpen,
  },
  {
    id: 'f4',
    name: 'Internships & Industrial Training',
    description:
      'Explore internships and training programs designed to give you hands-on experience and help kickstart your career.',
    icon: GraduationCap,
  },
];
