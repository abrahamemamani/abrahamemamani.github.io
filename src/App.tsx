import { Experiences, Header, Banner, Works, Skills, Contact } from '@components';

function App (): JSX.Element {
  return (
    <div className="app h-full bg-secondary">
      <Contact />
      <Header />
      <Banner />
      <Skills />
      <Works />
      <Experiences />
    </div>
  );
}

export default App;
