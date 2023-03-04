import { EBanner } from 'src/constants';

export const Description = (): JSX.Element => {
  return (
    <div className='text-center m-auto xl:text-left'>
      <span className='block text-main text-xl lg:text-2xl font-medium'>
        {EBanner.greeting}
      </span>
      <h1 className='block text-white text-3xl lg:text-4xl font-bold my-1'>
        {EBanner.name}
      </h1>
      <h2 className='block text-accent text-xl lg:text-2xl font-medium'>
        {EBanner.role}
      </h2>
      <p className='text-light-grey mt-4 lg:text-lg'>
        {EBanner.description}
      </p>
    </div>
  );
};
