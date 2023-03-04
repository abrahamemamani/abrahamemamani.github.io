import { EExperience, Techs } from 'src/constants';

export interface ExperienceProps {
  role: string;
  company: string;
  dateFrom: string;
  dateTo: string;
  softSkills: string[];
  hardSkills: number[];
}

interface Props {
  item: ExperienceProps;
}

export const Experience = ({
  item: {
    company, role, dateFrom, dateTo, softSkills, hardSkills,
  },
}: Props): JSX.Element => {
  const renderHardSkills = hardSkills.map(hard => Techs[hard]).join(', ').concat('.');

  return (
    <article className='text-white text-left pl-8'>
      <h2 className='font-medium text-xl lg:text-2xl'>
        {role}
      </h2>
      <h3 className='mb-2 text-main lg:text-xl'>
        {company}
      </h3>
      <ul className='text-light-grey pl-4 mb-2 lg:text-lg'>
        {softSkills.map(softSkill => (
          <li
            className='list-disc'
            key={softSkill}
          >
            {softSkill}
          </li>))}
      </ul>
      <span>
        <span className='text-main lg:text-lg'>
          { EExperience.skills }
        </span>
        {renderHardSkills}
      </span>
    </article>
  );
};
