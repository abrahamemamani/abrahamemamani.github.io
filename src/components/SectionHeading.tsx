interface Props {
  title: string;
  description: string;
}

export const SectionHeading = ({ title, description, }: Props): JSX.Element => {
  return (
    <div className="text-center mb-5">
      <span className='block text-white text-3xl lg:text-4xl font-bold'>
        { title }
      </span>
      <span className='text-light-grey lg:text-lg'>
        { description }
      </span>
    </div>
  );
};
