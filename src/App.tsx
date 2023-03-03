import { Experiences, Header, Banner, Works } from '@components';

function App (): JSX.Element {
  return (
    <div className="app h-full bg-secondary">
      <Header />
      <Banner />
      <Works />
      <Experiences />
    </div>
  );
}

export default App;
