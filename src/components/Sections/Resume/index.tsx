import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">Modeling & Evaluation</h3>
              <p className="text-sm text-neutral-700">PyTorch, TensorFlow, Ray RLlib, LangChain, HuggingFace, vector search (Faiss, Pinecone), prompt evaluation, offline/online experimentation</p>
            </div>
            <div className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">MLOps & Data</h3>
              <p className="text-sm text-neutral-700">Python, Scala, Kubernetes, Kubeflow, Airflow, Spark/Beam, MLflow, Weights & Biases, feature stores, CI/CD for ML, AWS/GCP</p>
            </div>
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
