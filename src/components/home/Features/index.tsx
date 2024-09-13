'use client';
import {
  BatteryCharging,
  Crosshair,
  Lightbulb,
  Megaphone,
  Shield,
  SquareArrowOutDownLeft,
} from 'lucide-react';
import Image from 'next/image';

import { FeatureType } from '@/lib/types';

import { Wrapper } from '@/components/layout';

import Feature from './Feature';

const Features = () => {
  return (
    <Wrapper id='features'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='mt-16 mb-6 h1'>
          It's not impossible to{' '}
          <span className='text-gradient-primary'>stay safe in public,</span>
          <br />
          you just have to take the right steps.
        </h2>

        <p className='max-w-lg mx-auto mt-4 leading-relaxed text-muted-foreground'>
          Experience Enhanced Personal Safety with our rechargeable self-defense
          keychain equipped with a 130-140dB SOS alarm.
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
            alt=''
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
    name: 'Alarm Activation',
    description:
      'Easily activate The Safekey alarm by pulling the keychain, providing a quick and effective way to alert others.',
    icon: Megaphone,
  },
  {
    id: 'f2',
    name: 'Self-Defense Features',
    description:
      'Equipped with a 130-140dB alarm, The Safekey scares attackers and alerts people within 1000 feet.',
    icon: Crosshair,
  },
  {
    id: 'f3',
    name: 'Rechargeable',
    description:
      'Conveniently recharge The Safekey with a USB-C port, offering fast charging, lasting up to 12 months on standby.',
    icon: BatteryCharging,
  },
  {
    id: 'f4',
    name: 'Compact & Portable',
    description:
      'Easily attach it to your keychain, or carry it in your pocket.',
    icon: SquareArrowOutDownLeft,
  },
  {
    id: 'f5',
    name: 'Flashlight',
    description:
      'The powerful 40 lumens LED light provides visibility in low-light situations.',
    icon: Lightbulb,
  },
  {
    id: 'f6',
    name: 'Durability',
    description:
      'Built to withstand tough conditions with an IPX3 rating, and a battery lasting up to 12 months.',
    icon: Shield,
  },
];
