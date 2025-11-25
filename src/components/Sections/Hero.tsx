import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions, highlights} = heroData;

  return (
    <Section className="bg-white" sectionId={SectionId.Hero}>
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr,0.8fr]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">Machine Learning Engineer</p>
            <h1 className="text-4xl font-semibold text-neutral-900 sm:text-5xl lg:text-6xl">{name}</h1>
            <div className="prose prose-neutral max-w-none text-base text-neutral-700 sm:text-lg">{description}</div>
          </div>
          {highlights && (
            <div className="flex flex-wrap gap-2">
              {highlights.map(item => (
                <span
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 ring-1 ring-neutral-200"
                  key={item}>
                  {item}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-3 text-neutral-800">
            <Socials />
          </div>
          <div className="flex flex-wrap gap-3">
            {actions.map(({href, text, primary, Icon}) => (
              <a
                className={classNames(
                  'flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 sm:text-base',
                  primary
                    ? 'bg-sky-600 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
                    : 'border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400',
                )}
                href={href}
                key={text}>
                {text}
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            ))}
          </div>
        </div>
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm sm:h-72 sm:w-72 md:h-80 md:w-80">
          <Image alt={`${name}-image`} layout="fill" objectFit="cover" placeholder="blur" priority src={imageSrc} />
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
