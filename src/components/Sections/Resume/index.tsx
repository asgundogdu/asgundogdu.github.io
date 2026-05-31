import {FC, memo} from 'react';

import {education, experience, researchItems, SectionId, skillGroups} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillGroups.map(group => (
              <div className="space-y-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm" key={group.title}>
                <h3 className="text-lg font-semibold text-neutral-900">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span
                      className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 ring-1 ring-neutral-200"
                      key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Research & Talks">
          <div className="grid grid-cols-1 gap-3">
            {researchItems.map(item => (
              <div
                className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm"
                key={`${item.title}-${item.venue}`}>
                <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{item.venue}</p>
              </div>
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
