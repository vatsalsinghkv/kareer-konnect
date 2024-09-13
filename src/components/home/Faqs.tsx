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
        <h2 className='h0'>Frequently Asked Questions</h2>
        <p className='max-w-lg mx-auto mt-4 text-muted-foreground'>
          With lots of unique questions, We will be answering most of the
          Frequently Asked Questions here.
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
    q: 'How do I activate the alarm?',
    a: 'To activate the alarm on the keychain, simply press the dedicated alarm button or pull out the activation pin, depending on the model. Refer to the user manual for specific instructions on your product.',
  },
  {
    id: 2,
    q: 'Is the battery rechargeable?',
    a: 'Yes, the keychain comes with a rechargeable battery. Simply connect it to a power source using the provided charging cable to recharge the battery for repeated use.',
  },
  {
    id: 3,
    q: 'Can I customize the alarm sound volume?',
    a: 'Yes, you can customize the alarm sound volume based on your preference. Refer to the user manual for instructions on adjusting the volume settings on your keychain.',
  },
  {
    id: 4,
    q: 'Is the keychain waterproof?',
    a: 'The keychain is designed to be water-resistant with an IPX3 rating, making it suitable for use in various weather conditions. However, it is not recommended for prolonged submersion in water.',
  },
  {
    id: 5,
    q: 'Can I test The Safekey?',
    a: 'Yes! Just pull the pin to activate The Safekey. To stop the alarm, simply put the pin back in.',
  },
];
