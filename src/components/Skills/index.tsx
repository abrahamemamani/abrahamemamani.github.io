import { Skill, SkillProps } from './Skill';
import Sass from '@assets/skills/sass.svg';
import Typescript from '@assets/skills/typescript-icon.svg';
import Javascript from '@assets/skills/javascript.svg';
import Git from '@assets/skills/git-icon.svg';
import React from '@assets/skills/react.svg';
import Biceps from '@assets/skills/biceps.png';
import { EKeyColors, ELevel, ESkills } from 'src/constants';
import { SectionHeading } from '@components/SectionHeading';

const skills: SkillProps[] = [
  {
    ids: [1, 2],
    src: React,
    percentage: 75,
    level: ELevel.advanced,
    colorKey: EKeyColors.React,
  },
  {
    ids: [4],
    src: Javascript,
    percentage: 75,
    level: ELevel.advanced,
    colorKey: EKeyColors.Javascript,
  },
  {
    ids: [3],
    src: Typescript,
    percentage: 50,
    level: ELevel.proficient,
    colorKey: EKeyColors.Typescript,
  },
  {
    ids: [6, 19, 13],
    src: Sass,
    percentage: 75,
    level: ELevel.advanced,
    colorKey: EKeyColors.Sass,
  },
  {
    ids: [7],
    src: Git,
    percentage: 50,
    level: ELevel.proficient,
    colorKey: EKeyColors.Git,
  },
  {
    ids: [18],
    src: Biceps,
    percentage: 100,
    level: ELevel.excellent,
    colorKey: EKeyColors.Main,
  }
];

export const Skills = (): JSX.Element => {
  const renderSkills = skills.map(item => (
    <Skills.Skill
      item={item}
      key={item.ids[0]}
    />
  ));

  return (
    <section className='container py-4 lg:py-10 m-auto'>
      <SectionHeading
        description={ESkills.description}
        title={ESkills.title}
      />
      <div className='py-5'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8 border-2 border-light-secondary border-dashed px-4 py-4 xl:px-6 xl:py-6'>
          { renderSkills }
        </div>
      </div>
    </section>
  );
};

Skills.Skill = Skill;
