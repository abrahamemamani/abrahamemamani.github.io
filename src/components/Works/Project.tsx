import { Tag } from './Tag';

interface Props {
  item: ProjectProps;
}

export interface ProjectProps {
  name: string;
  description: string;
  tags: number[];
  link: string;
  src: string;
};

export const Project = ({ item: { link, src, name, description, tags, }, }: Props): JSX.Element => {
  const renderTags = tags.map((id) => (
    <Tag
      id={id}
      key={id}
    />
  ));

  return (
    <article
      className='text-white py-5'
      key={link}
    >
      <img
        alt={name}
        src={src}
      />
      <h3 className='font-medium text-xl mb-2'>
        {name}
      </h3>
      <p className='text-light-grey mb-3'>
        {description}
      </p>
      <div className='flex flex-wrap justify-center gap-2'>
        { renderTags }
      </div>
    </article>
  );
};
