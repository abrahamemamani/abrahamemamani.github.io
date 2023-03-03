import { ELogo } from 'src/constants';

export const Logo = (): JSX.Element => {
  return (
    <span className='text-lg font-medium text-accent'>
      { ELogo.name }
      <span className='text-white'>
        { ELogo.lastName }
      </span>
    </span>
  );
};
