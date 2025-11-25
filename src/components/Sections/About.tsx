import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-50" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-6', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm md:h-32 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-semibold text-neutral-900">About me</h2>
            <p className="prose prose-neutral prose-sm text-neutral-700 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex items-start gap-x-3 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-sky-700" />}
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-neutral-900">{label}</span>
                  <span className="text-neutral-600">{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
