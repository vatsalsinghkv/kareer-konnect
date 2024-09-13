import { Companies, Faqs, Features, Hero } from '@/components/home';
import { ChatBot } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Companies />
      <Faqs />
      <ChatBot />
    </>
  );
}
