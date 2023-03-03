import { Techs } from 'src/constants';

interface Props {
  id: number;
}

export const Tag = ({ id, }: Props): JSX.Element => {
  return (
    <div>
      <span
        className='rounded-full border-main border-2 whitespace-nowrap px-2'
      >
        {Techs[id]}
      </span>
    </div>
  );
};
