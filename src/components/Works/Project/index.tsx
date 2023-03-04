import { useWindowSize } from 'src/hooks/useWindowSize';
import { Image } from './Image';
import { Description } from './Description';

interface Props {
  item: ProjectProps;
  even: Boolean;
}

export interface ProjectProps {
  name: string;
  description: string;
  tags: number[];
  link: string;
  src: string;
};

export const Project = ({ item, even, }: Props): JSX.Element => {
  const { link, name, src, } = item;
  const { responsive, } = useWindowSize();

  return (
    <article
      className='text-white py-5 text-center lg:grid lg:grid-cols-2'
      key={link}
    >
      {(even === true || !responsive.lg)
        ? (
          <>
            <Project.Image
              link={link}
              name={name}
              src={src}
            />
            <Project.Description
              even
              item={item}
            />
          </>
          )
        : (
          <>
            <Project.Description item={item} />
            <Project.Image
              link={link}
              name={name}
              src={src}
            />
          </>
          )}
    </article>
  );
};

Project.Image = Image;
Project.Description = Description;
