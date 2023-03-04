import { EKeyColors, ELevel } from 'src/constants';

interface Props {
  percentage: number;
  caption: ELevel;
  colorKey: TColorKey;
}

export type TWidthPercentageClass = 'before:w-9/12' | 'before:w-3/6' | 'before:w-full';

const widthClasses: Record<number, TWidthPercentageClass> = {
  50: 'before:w-3/6',
  75: 'before:w-9/12',
  100: 'before:w-full',
};

export type TColorClass = (
  'before:bg-react' |
  'before:bg-javascript' |
  'before:bg-typescript' |
  'before:bg-sass' |
  'before:bg-git' |
  'before:bg-main'
);

export type TColorKey = EKeyColors;

const colorClasses: Record<TColorKey, TColorClass> = {
  react: 'before:bg-react',
  javascript: 'before:bg-javascript',
  typescript: 'before:bg-typescript',
  sass: 'before:bg-sass',
  git: 'before:bg-git',
  main: 'before:bg-main',
};

export const ProgressBar = ({ percentage, caption, colorKey, }: Props): JSX.Element => {
  const widthPercentageClass: TWidthPercentageClass = widthClasses[percentage];
  const colorClass: TColorClass = colorClasses[colorKey];

  return (
    <div>
      <div className={`
        relative w-full overflow-hidden bg-gray-700 h-2 ${colorClass}
        rounded before:absolute top-0 left-0 before:h-2 before:rounded ${widthPercentageClass}
        `}
      />
      <h3 className='text-main uppercase text-right mt-1'>
        { caption }
      </h3>
    </div>
  );
};
