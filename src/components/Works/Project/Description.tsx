import classNames from 'classnames';
import { ProjectProps } from '.';
import { Tag } from './Tag';

interface Props {
  item: ProjectProps;
  even?: boolean;
}

export const Description = ({ item: { name, description, tags, }, even = false, }: Props): JSX.Element => {
  const renderTags = tags.map((id) => (
    <Tag
      id={id}
      key={id}
    />
  ));

  const tagsContainerClass = classNames({
    'lg:justify-start': even,
    'lg:justify-end': !even,
  });

  const containerClass = classNames({
    'lg:text-left': even,
    'lg:text-right': !even,
  });

  return (
    <div className={`lg:flex lg:items-center ${containerClass}`}>
      <div>
        <h3 className='font-medium text-xl mb-2 lg:text-2xl'>
          {name}
        </h3>
        <p className='text-light-grey mb-3 lg:text-lg'>
          {description}
        </p>
        <div className={`flex flex-wrap justify-center gap-2 ${tagsContainerClass}`}>
          { renderTags }
        </div>
      </div>
    </div>
  );
};

Description.defaultProps = {
  even: false,
};
