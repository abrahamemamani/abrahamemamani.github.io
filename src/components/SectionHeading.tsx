interface Props {
  title: string;
  description: string;
}

export const SectionHeading = ({ title, description, }: Props): JSX.Element => {
  return (
    <>
      <span className='block text-white text-3xl font-bold'>
        { title }
      </span>
      <span className='text-light-grey'>
        { description }
      </span>
    </>
  );
};
