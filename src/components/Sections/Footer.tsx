import {ChevronUpIcon} from '@heroicons/react/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <div className="relative border-t border-neutral-200 bg-white px-4 pb-8 pt-10 sm:px-8">
    <div className="absolute inset-x-0 -top-5 flex justify-center">
      <a
        className="rounded-full bg-white p-2 shadow-sm ring-1 ring-neutral-200 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-sky-600"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 text-neutral-800 sm:h-7 sm:w-7" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex gap-x-4 text-neutral-600">
        <Socials />
      </div>
      <span className="text-sm text-neutral-600">© Copyright 2022 Tim Baker</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
