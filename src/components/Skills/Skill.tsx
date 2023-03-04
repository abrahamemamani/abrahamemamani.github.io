import { ELevel, Techs } from 'src/constants';
import { ProgressBar, TColorKey } from './ProgressBar';

interface Props {
  item: SkillProps;
}

export interface SkillProps {
  ids: number[];
  src: string;
  percentage: number;
  level: ELevel;
  colorKey: TColorKey;
}

export const Skill = ({ item: { ids, src, percentage, level, colorKey, }, }: Props): JSX.Element => {
  const skillNames = ids.map(i => Techs[i]).join('/');

  return (
    <article className='flex items-center gap-5'>
      <img
        alt={skillNames}
        className='h-10 w-10 md:h-14 md:w-14'
        src={src}
      />
      <div className='w-full'>
        <h4 className='text-white text-lg'>
          { skillNames }
        </h4>
        <Skill.ProgressBar
          caption={level}
          colorKey={colorKey}
          percentage={percentage}
        />
      </div>
    </article>
  );
};

Skill.ProgressBar = ProgressBar;
