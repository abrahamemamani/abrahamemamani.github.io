interface Props {
  src: string;
}

export const Certificate = ({ src, }: Props): JSX.Element => {
  return (
    <div>
      <img
        alt='Certificate image'
        className='w-full h-full rounded-lg lg:opacity-[.85] lg:hover:opacity-100'
        src={src}
      />
    </div>
  );
};
