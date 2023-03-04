import Profile from '@assets/profile.jpg';
import Techs from '@assets/techs.png';

export const Photo = (): JSX.Element => {
  return (
    <div className='relative sm:w-3/5 lg:w-2/4 xl:w-3/4 2xl:w-2/3'>
      <img
        alt='Image of frontend technologies'
        className='w-full top-0 left-0 rotate-center'
        src={Techs}
      />
      <img
        alt='Avatar'
        className='h-40 lg:h-48 xl:h-40 absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 rounded-full'
        src={Profile}
      />
    </div>
  );
};
