import { EWorks } from 'src/constants';
import { Projects } from './Projects';
import { SectionHeading } from '@components';

export const Works = (): JSX.Element => {
  return (
    <section className='container text-center py-3'>
      <SectionHeading
        description={EWorks.description}
        title={EWorks.title}
      />
      <Works.Projects />
    </section>
  );
};

Works.Projects = Projects;
