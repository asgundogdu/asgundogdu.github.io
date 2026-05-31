import {AcademicCapIcon, BriefcaseIcon, LightningBoltIcon, MapIcon} from '@heroicons/react/outline';
import React from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  DetailGroup,
  Hero,
  HomepageMeta,
  ResearchItem,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ahmet Salih Gundogdu | Senior Machine Learning Engineer',
  description:
    'Senior ML engineer focused on robot learning, distributed training systems, and production-grade policy deployment.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Resume: 'resume',
  Contact: 'contact',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  eyebrow: 'Senior Machine Learning Engineer | Robot Learning & ML Systems',
  name: 'Ahmet Salih Gundogdu.',
  description: (
    <>
      <p className="prose-sm text-stone-700 sm:prose-base lg:prose-lg">
        I build large-scale robot-learning systems, distributed training infrastructure, and production-grade policy
        deployment pipelines. At the RAI Institute, I work on the platform layer that helps research teams move from
        simulation and evaluation to robot-side deployment.
      </p>
      <p className="prose-sm text-stone-700 sm:prose-base lg:prose-lg">
        My work spans IL/BC, RL, DAgger, VLA and diffusion policies, sim-to-real evaluation, and Ray/PyTorch/JAX systems
        that scale from research prototypes to multi-team platforms.
      </p>
    </>
  ),
  highlights: [
    'Robot learning: IL/BC, RL, DAgger, sim-to-real',
    'VLA, diffusion/DiT, and flow-matching policies',
    'Ray/PyTorch/JAX distributed training and online rollouts',
    'Policy runtime, evaluation, and robot-side deployment',
  ],
  actions: [
    {
      href: `#${SectionId.Resume}`,
      text: 'Resume',
      primary: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    'I focus on the engineering layer that turns robotics research loops into reliable systems: data collection, policy training, evaluation, and deployment. Previously, I worked on large-scale listener and track representation learning for Spotify Search and Home recommendations.',
  aboutItems: [
    {label: 'Location', text: 'Cambridge, MA', Icon: MapIcon},
    {label: 'Current', text: 'RAI Institute', Icon: BriefcaseIcon},
    {label: 'Focus', text: 'Robot learning systems', Icon: LightningBoltIcon},
    {label: 'Education', text: 'M.S. Data Science, Northeastern University', Icon: AcademicCapIcon},
  ],
};

/**
 * Resume section
 */
export const experience: TimelineItem[] = [
  {
    date: 'Jun 2023 - Present',
    location: 'RAI Institute. Cambridge, MA',
    title: 'Senior Machine Learning Engineer',
    content: (
      <p>
        Leading centralized robot-learning infrastructure for imitation learning, reinforcement learning, online DAgger,
        evaluation, and robot deployment. The work connects simulation collection, policy training, runtime tooling, and
        benchmark workflows for VLA-class, diffusion/DiT, and flow-matching robot policies.
      </p>
    ),
  },
  {
    date: 'Mar 2019 - Apr 2023',
    location: 'Spotify. Boston, MA',
    title: 'Machine Learning Engineer',
    content: (
      <p>
        Built representation learning systems and large-scale ML pipelines for Search, Home, playlist, and track
        recommendation workflows. The work combined model scaling, feature engineering, experimentation, and production
        data systems.
      </p>
    ),
  },
  {
    date: 'Jan 2018 - Aug 2018',
    location: 'WarnerMedia Applied Analytics Solutions. Boston, MA',
    title: 'Data Science Intern and Collaborator',
    content: (
      <p>
        Built NLP and audio-processing workflows for recognizing film entities in podcast content, combining fuzzy
        matching and supervised learning in a research collaboration.
      </p>
    ),
  },
  {
    date: 'Apr 2015 - Jul 2016',
    location: 'STM Defense Technologies and Engineering Inc. Ankara, Turkey',
    title: 'Data Scientist',
    content: (
      <p>
        Worked on time-series anomaly detection for traffic sensor systems, using recurrent neural networks to identify
        incident patterns and support operational alerting.
      </p>
    ),
  },
];

export const education: TimelineItem[] = [
  {
    date: 'Sep 2016 - Dec 2018',
    location: 'Northeastern University. Boston, MA',
    title: 'M.S. Data Science',
    content: <p>Thesis: Post-correction of OCR outputs for historical documents using language models.</p>,
  },
  {
    date: 'Sep 2011 - Jan 2015',
    location: 'Sabanci University. Istanbul, Turkey',
    title: 'B.S. Mechatronics Engineering',
    content: <p>Thesis: Inverted pendulum control using reinforcement learning.</p>,
  },
];

export const skillGroups: DetailGroup[] = [
  {
    title: 'Robot Learning',
    items: [
      'IL/BC',
      'RL',
      'DAgger',
      'sim-to-real',
      'VLA policies',
      'diffusion policies',
      'flow matching',
      'policy evaluation',
    ],
  },
  {
    title: 'ML Systems',
    items: [
      'PyTorch',
      'JAX',
      'Ray',
      'CUDA',
      'torch.compile',
      'NVIDIA Nsight',
      'distributed training',
      'online rollouts',
    ],
  },
  {
    title: 'Robotics & Simulation',
    items: ['IsaacLab', 'MuJoCo/MJLab', 'ROS', 'robot deployment', 'robot-side inference', 'RGB policy rollouts'],
  },
  {
    title: 'Infra & Data',
    items: ['Kubernetes', 'Docker', 'Bazel', 'Spark', 'Beam', 'BigQuery/BigTable', 'Scala', 'Python', 'C++'],
  },
];

export const researchItems: ResearchItem[] = [
  {
    title: 'ExpertGen: Scalable sim-to-real expert policy learning from imperfect behavior priors',
    venue: 'arXiv, 2026',
  },
  {
    title: 'AnyTask: Automated task and data generation for sim-to-real policy learning',
    venue: 'arXiv, 2025',
  },
  {
    title: 'Hybrid RL + Imitation Learning Platform for Robotics',
    venue: 'Ray Summit, 2025',
  },
  {
    title: 'How The AI Institute is Revolutionizing Robotics ML Training',
    venue: 'Ray Summit, 2024',
  },
  {
    title: 'Recognizing Film Entities in Podcasts',
    venue: 'CoRR/arXiv, 2018',
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    "Reach out if you're working on robot learning, distributed ML systems, or production policy deployment. The best place to start is email or LinkedIn.",
  items: [
    {
      type: ContactType.Email,
      text: 'gundogduasalih@gmail.com',
      href: 'mailto:gundogduasalih@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/ahmet-salih-gundogdu',
      href: 'https://www.linkedin.com/in/ahmet-salih-gundogdu',
    },
    {
      type: ContactType.Github,
      text: 'github.com/asgundogdu',
      href: 'https://github.com/asgundogdu',
    },
    {
      type: ContactType.Location,
      text: 'Cambridge, MA',
      href: 'https://www.google.com/maps/place/Cambridge,+MA',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/asgundogdu'},
  {
    label: 'Stack Overflow',
    Icon: StackOverflowIcon,
    href: 'https://stackoverflow.com/users/4980699/ahmet-salih-gundogdu',
  },
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/ahmet-salih-gundogdu/',
  },
  {
    label: 'Twitter',
    Icon: TwitterIcon,
    href: 'https://twitter.com/asalihgundogdu',
  },
];
