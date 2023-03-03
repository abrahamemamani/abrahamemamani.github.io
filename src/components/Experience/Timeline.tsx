interface Props<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

export const Timeline = <T, >({ data, renderItem, keyExtractor, }: Props<T>): JSX.Element => {
  return (
    <div>
      {data.map((item) => (
        <div
          className='
            relative h-full border-l border-dashed mb-10
            after:h-3 after:w-3 after:bg-main after:absolute
            after:left-0 after:-translate-x-2/4
            after:rounded-full
            before:h-3 before:w-3 before:bg-main before:absolute
            before:left-0 before:-translate-x-2/4
            before:rounded-full
          '
          key={keyExtractor(item)}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};
