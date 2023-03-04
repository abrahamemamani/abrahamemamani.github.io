import { Description } from './Description';
import { Photo } from './Photo';

export const Banner = (): JSX.Element => {
  return (
    <section className='container m-auto grid xl:grid-cols-2 bg-secondary py-3'>
      <Banner.Description />
      <div className='flex justify-center'>
        <Banner.Photo />
      </div>
    </section>
  );
};

Banner.Description = Description;
Banner.Photo = Photo;
