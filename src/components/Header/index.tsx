import { Logo } from './Logo';
import { Social } from './Social';

export const Header = (): JSX.Element => {
  return (
    <header className='container flex justify-between items-center py-5 text-white'>
      <Header.Logo />
      <Header.Social />
    </header>
  );
};

Header.Logo = Logo;
Header.Social = Social;
