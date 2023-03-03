import { EBanner } from 'src/constants';

export const Description = (): JSX.Element => {
  return (
    <div className='container text-center'>
      <div>
        <span className='block text-main text-xl font-medium'>
          {EBanner.greeting}
        </span>
        <span className='block text-white text-3xl font-bold my-1'>
          {EBanner.name}
        </span>
        <span className='block text-accent text-xl font-medium'>
          {EBanner.role}
        </span>
      </div>
      <p className='text-light-grey mt-4'>
        {EBanner.description}
      </p>
    </div>
  );
};
