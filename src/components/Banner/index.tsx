import { Description } from './Description';
import { Photo } from './Photo';

export const Banner = (): JSX.Element => {
  return (
    <section className='bg-secondary py-3'>
      <Banner.Description />
      <Banner.Photo />
    </section>
  );
};

Banner.Description = Description;
Banner.Photo = Photo;
