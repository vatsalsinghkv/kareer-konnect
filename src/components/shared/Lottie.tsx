'use client';
import { Player } from '@lottiefiles/react-lottie-player';

type Props = {
  path: string;
  className?: string;
};

const Lottie = ({ path, className = '' }: Props) => {
  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <Player autoplay loop src={path}></Player>
    </div>
  );
};

export default Lottie;
