interface Props {
  name: string;
  src: string;
  link: string;
}

export const Image = ({ name, src, link, }: Props): JSX.Element => {
  const hasLink = (Boolean(link.length));

  return (
    <div className="flex justify-center">
      <a
        href={link}
        rel="noreferrer"
        target={hasLink ? '_blank' : ''}
      >
        <img
          alt={name}
          className='inline md:w-1/2 lg:w-4/5 2xl:w-[30rem]'
          src={src}
        />
      </a>
    </div>
  );
};
