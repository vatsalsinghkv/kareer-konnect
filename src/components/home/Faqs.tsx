'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Wrapper } from '../layout';

export default function Faqs() {
  const [selected, setSelected] = useState(-1);

  return (
    <Wrapper id='faqs'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='h1'>Frequently Asked Questions</h2>
        <p className='max-w-lg mx-auto mt-4 text-muted-foreground'>
          Have questions about our platform? We've got you covered! Here are
          some of the most frequently asked questions.
        </p>
      </div>

      <div className='max-w-4xl mx-auto mt-8 space-y-6 sm:mt-16'>
        {questions.map((item) => (
          <Faq
            selected={selected === item.id}
            setSelected={() => setSelected(selected === item.id ? -1 : item.id)}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Wrapper>
  );
}

type FaqProps = {
  selected: boolean;
  setSelected: () => void;
  q: string;
  a: string;
};

const Faq = ({ selected, setSelected, q, a }: FaqProps) => {
  return (
    <button
      onClick={setSelected}
      className={cn(
        'relative w-full z-10 rounded-xl border border-border',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background'
      )}
    >
      <div className='relative flex flex-row items-center justify-between w-full p-6 overflow-hidden rounded-xl'>
        <h3 className='text-lg text-left text-card-foreground md:text-xl'>
          {q}
        </h3>
        <ChevronDown
          className={`shrink-0 origin-center text-xl text-muted-foreground transition-all duration-300 md:text-3xl ${
            selected ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`z-10 grid overflow-hidden px-6 pt-0 transition-all duration-300
        ${selected ? 'grid-rows-[1fr] py-6' : 'grid-rows-[0]'}
        `}
      >
        <p className='text-left text-muted-foreground'>{a}</p>
      </div>
    </button>
  );
};

const questions = [
  {
    id: 1,
    q: 'How does the AI-driven job matchmaking work?',
    a: 'Our advanced AI algorithms analyze your skills, qualifications, and preferences to match you with the most suitable job opportunities across various sectors and regions.',
  },
  {
    id: 2,
    q: 'What kind of job opportunities are available on the platform?',
    a: 'We offer access to a wide range of job opportunities across the private sector, government sector, and overseas employment, regularly updated to provide the best options.',
  },
  {
    id: 3,
    q: 'How can I find internship and industrial training opportunities?',
    a: 'We have a dedicated section for internships and industrial training. You can browse opportunities, apply, and even get guidance on how to secure the best experiences for your career growth.',
  },
  {
    id: 4,
    q: 'What kind of mentorship programs are available?',
    a: 'Our mentorship programs are powered by both AI-driven recommendations and direct guidance from industry professionals. AI will suggest personalized career advice, while professionals provide hands-on support to help you navigate career challenges.',
  },
  {
    id: 5,
    q: 'Are there any career counseling services available?',
    a: 'Yes, our platform provides access to personalized counseling services through AI tools for quick advice and guidance from career professionals for in-depth support with job applications, resume building, and interview preparation.',
  },
];
