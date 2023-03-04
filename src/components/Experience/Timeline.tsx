interface Props<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

export const Timeline = <T, >({ data, renderItem, keyExtractor, }: Props<T>): JSX.Element => {
  return (
    <>
      {data.map((item) => (
        <div
          key={keyExtractor(item)}
        >
          <div
            className='
            relative border-l border-dashed mb-10
            after:h-3 after:w-3 after:bg-main after:absolute
            after:left-0 after:-translate-x-2/4
            after:rounded-full
            before:h-3 before:w-3 before:bg-main before:absolute
            before:left-0 before:-translate-x-2/4
            before:rounded-full
          '
          >
            {renderItem(item)}
          </div>
        </div>
      ))}
    </>
  );
};
