import { AcademicCapIcon, MapIcon } from "@heroicons/react/outline";
import React from "react";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import heroImage from "../images/header-background.webp";
import profilepic from "../images/profilepic.jpg";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Ahmet Gundogdu | Machine Learning Engineer",
  description: "ML engineer focused on reliable robotics, large-scale training, and modern MLOps.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Resume: "resume",
  Contact: "contact",
  Stats: "stats",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Ahmet Gundogdu.`,
  description: (
    <>
      <p className="prose-sm text-stone-700 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-900">Machine Learning Engineer</strong> building reliable, production-grade AI systems. At Boston Dynamics AI Institute I focus on imitation learning for mobile manipulation, shaping policy learning pipelines that move from simulation to hardware with reproducibility and observability in mind.
      </p>
      <p className="prose-sm text-stone-700 sm:prose-base lg:prose-lg">
        I previously worked on large-scale recommendation systems at Spotify and now spend most of my time combining LLM tooling, vector search, and robotics control stacks. I also co-host Veri Tezgahi, an AI podcast for Turkish-speaking engineers.
      </p>
    </>
  ),
  highlights: [
    "LLM evaluation, safety, and retrieval (LangChain, Faiss, OpenAI API)",
    "Distributed training and reinforcement learning with PyTorch + Ray",
    "Experiment tracking and observability with MLflow & Weights & Biases",
    "GPU-first pipelines on Kubernetes for robotics and MLOps",
  ],
  actions: [
    {
      href: "https://open.spotify.com/show/6xh1JvolfduK8j5sb1WnoC",
      text: "Podcast [TR]",
      primary: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
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
    `I design ML systems end-to-end—from data curation to deployment—so research ideas can ship quickly without sacrificing reliability. Outside work I enjoy trail running, tinkering with hardware projects, and sharing lessons learned with the ML community.`,
  aboutItems: [
    { label: "Location", text: "Boston, MA", Icon: MapIcon },
    { label: "Study", text: "Northeastern University", Icon: AcademicCapIcon },
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const experience: TimelineItem[] = [
  {
    date: "July 2023 - Present",
    location: "Boston Dynamics AI Institute. Boston, MA",
    title: "Machine Learning Engineer",
    content: (
      <p>
        Lead large-scale imitation learning for mobile manipulation, pairing
        PyTorch + Ray with strong evaluation harnesses to push policies from
        simulation into hardware. Building reproducible training and rollout
        tooling with telemetry, experiment tracking, and continuous validation.
      </p>
    ),
  },
  {
    date: "March 2019 - April 2023",
    location: "Spotify. Boston, MA",
    title: "Machine Learning Engineer",
    content: (
      <p>
        Built recommendation and content understanding models using large-scale
        representation learning. Shipped Kubeflow-based pipelines, feature
        stores, and vector search services to keep ranking models fresh and
        observable.
      </p>
    ),
  },
  {
    date: "January 2018 - August 2018",
    location: "WarnerMedia Applied Analytics Solutions. Boston, MA",
    title: "Data Science (Co-op)",
    content: (
      <p>
        Prototyped an audio entity recognition pipeline using fuzzy matching and
        supervised learning, which led to a KDD 2018 publication.
      </p>
    ),
  },
  {
    date: "April 2015 - July 2016",
    location: "STM Defense Technologies and Engineering Inc. Ankara, Turkey",
    title: "Data Scientist",
    content: (
      <p>
        Designed an RNN-based anomaly detection system for city sensor data
        (95% accuracy) and automated the rollout so incident alerts were
        shipped to operators in real time.
      </p>
    ),
  },
];

export const education: TimelineItem[] = [
  {
    date: "December 2018",
    location: "Northeastern University. Boston, MA",
    title: "Masters in Data Science",
    content: (
      <p>
        {" "}
        Research Areas: NLP, recommendation systems, information retrieval,
        distributed systems.
      </p>
    ),
  },
  {
    date: "January 2015",
    location: "Sabanci University. Istanbul, Turkey",
    title: "Mechatronics Engineering",
    content: (
      <p>Thesis: Inverted Pendulum System Using Reinforcement Learning</p>
    ),
  },
];

/**

Contact section
*/
export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "Reach out if you're looking to collaborate on ML platforms, robotics learning loops, or applied LLM projects. I'm always open to swapping notes with fellow engineers.",
  items: [
    {
      type: ContactType.Email,
      text: "gundogduasalih@gmail.com",
      href: "mailto:gundogduasalih@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Cambridge MA, US",
      href: "https://www.google.com/maps/d/u/0/embed?mid=12Z7rpnUEmOMT5EUAt7HDPxL1Xq4&ie=UTF8&hl=en&msa=0&ll=42.368691%2C-70.977173&spn=0.405848%2C0.549316&z=9&output=embed",
    },
    {
      type: ContactType.Twitter,
      text: "@asalihgundogdu",
      href: "https://www.twitter.com/asalihgundogdu/",
    },
    {
      type: ContactType.Github,
      text: "asgundogdu",
      href: "https://github.com/asgundogdu",
    },
  ],
};

/**

Social items
*/
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/asgundogdu" },
  {
    label: "Stack Overflow",
    Icon: StackOverflowIcon,
    href: "https://stackoverflow.com/users/4980699/ahmet-salih-gundogdu",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/ahmet-salih-gundogdu/",
  },
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/asalihgundogdu",
  },
];
