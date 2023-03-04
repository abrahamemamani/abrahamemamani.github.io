import { SectionHeading } from '@components';
import { EExperience } from 'src/constants';
import { Timeline } from './Timeline';
import { Experience, ExperienceProps } from './Experience';

const experiences: ExperienceProps[] = [
  {
    role: 'Frontend React Developer',
    company: 'ConsultR',
    dateFrom: 'Oct. 2019',
    dateTo: 'Actualidad',
    softSkills: [
      'Desarrollo de aplicaciones web y móviles, desde la planificación hasta la publicación.',
      'Colaboración con el equipo de producto para la definición de nuevas características.',
      'Mentor y líder técnico del equipo front-end.',
      'Evaluación de diseños de UX/UI para la viabilidad técnica.',
      'Soporte y desarrollo de nuevas funcionalidades para proyectos ya existentes.',
      'Diseño y mantenimiento de aplicaciones responsive con enfoque mobile-first.'
    ],
    hardSkills: [1, 3, 4, 2, 5, 7, 11, 10, 6, 12, 13, 14],
  },
  {
    role: 'Frontend Developer',
    company: 'SD Technology',
    dateFrom: 'Feb. 2018',
    dateTo: 'Jun. 2018',
    softSkills: [
      'Rediseño de aplicaciones web adaptables.',
      'Desarrollo de nuevas funcionalidades en el frontend.',
      'Soporte al backend de un proyecto existente.'
    ],
    hardSkills: [4, 15, 6, 14, 16, 17],
  }
];

export const Experiences = (): JSX.Element => {
  return (
    <section className='container py-3 lg:py-10 m-auto'>
      <SectionHeading
        description={EExperience.description}
        title={EExperience.title}
      />
      <div className='py-5 lg:grid lg:grid-cols-2 lg:gap-4'>
        <Experiences.Timeline
          data={experiences}
          keyExtractor={(item) => item.company}
          renderItem={(item) => <Experiences.Experience item={item} />}
        />
      </div>
    </section>
  );
};

Experiences.Timeline = Timeline;
Experiences.Experience = Experience;
