import {DeviceMobileIcon, LocationMarkerIcon, MailIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: MailIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DeviceMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: LocationMarkerIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-50" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <MailIcon className="hidden h-14 w-14 text-sky-700 md:block" />
          <div>
            <p className="text-sm font-semibold text-sky-700">Contact</p>
            <h2 className="text-2xl font-semibold text-neutral-900">{headerText}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="prose prose-neutral leading-6 text-neutral-700">{description}</p>
          <dl className="grid grid-cols-1 gap-3 text-base text-neutral-600 sm:grid-cols-2">
            {items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              return (
                <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm" key={srLabel}>
                  <dt className="sr-only">{srLabel}</dt>
                  <dd className="flex items-start">
                    <a
                      className={classNames(
                        'flex min-w-0 rounded-md text-neutral-700 transition-colors hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600',
                        {'hover:text-neutral-900': href},
                      )}
                      href={href}
                      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
                      target={href?.startsWith('http') ? '_blank' : undefined}>
                      <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-sky-700 sm:h-5 sm:w-5" />
                      <span className="ml-3 break-words text-sm text-neutral-800 sm:text-base">{text}</span>
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
