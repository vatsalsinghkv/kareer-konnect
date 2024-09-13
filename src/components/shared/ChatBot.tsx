import { BotMessageSquare } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

export default function ChatBot() {
  return (
    <button
      className={cn(
        'md:w-14 w-12 h-12 md:h-14 rounded-full shadow-lg bg-primary',
        'flex items-center justify-center',
        'fixed right-5 bottom-5 md:right-12 md:bottom-12 z-10 group'
      )}
    >
      <BotMessageSquare className="text-primary-foreground w-6 h-6 md:w-8 md:h-8 group-hover:scale-[1.1] transition-all" />
      {/* Tooltip */}
      <div className="absolute invisible px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-10 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
        ChatBot
        <svg
          className="absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </button>
  );
}
