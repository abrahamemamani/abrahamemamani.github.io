import { Experiences, Header, Banner, Works, Skills, Contact, Certificates } from '@components';

function App (): JSX.Element {
  return (
    <div className="app h-full bg-secondary">
      <Contact />
      <Header />
      <Banner />
      <Skills />
      <Works />
      <Certificates />
      <Experiences />
    </div>
  );
}

export default App;
