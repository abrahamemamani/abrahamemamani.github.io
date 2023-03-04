import { Experiences, Header, Banner, Works, Skills } from '@components';

function App (): JSX.Element {
  return (
    <div className="app h-full bg-secondary">
      <Header />
      <Banner />
      <Skills />
      <Works />
      <Experiences />
    </div>
  );
}

export default App;
