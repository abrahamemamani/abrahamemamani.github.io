import Profile from '@assets/profile.jpg';
import Techs from '@assets/techs.png';

export const Photo = (): JSX.Element => {
  return (
    <div className='relative'>
      <img
        alt='Image of frontend technologies'
        className='w-full top-0 left-0 rotate-center'
        src={Techs}
      />
      <img
        alt='Avatar'
        className='absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 rounded-full h-40'
        src={Profile}
      />
    </div>
  );
};
