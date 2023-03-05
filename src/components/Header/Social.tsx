import FrontendMentor from '@assets/frontendmentor.svg';
import GitHub from '@assets/github.svg';
import LinkedIn from '@assets/linkedin.svg';

interface SocialProps {
  link: string;
  src: string;
  alt: string;
}

const socialLinks: SocialProps[] = [
  {
    link: 'https://www.linkedin.com/in/abraham-mamani-2a3571142/',
    src: LinkedIn,
    alt: 'LinkedIn logo image',
  },
  {
    link: 'https://github.com/abrahamemamani',
    src: GitHub,
    alt: 'GitHub logo image',
  },
  {
    link: 'https://www.frontendmentor.io/profile/abrahamemamani',
    src: FrontendMentor,
    alt: 'FrontendMentor logo image',
  }
];

export const Social = (): JSX.Element => {
  const renderLinks = socialLinks.map(({ link, src, alt, }) => (
    <a
      href={link}
      key={link}
      rel="noreferrer"
      target='_blank'
    >
      <img
        alt={alt}
        className='h-7'
        src={src}
      />
    </a>
  ));

  return (
    <div className='flex gap-4 lg:gap-6'>
      { renderLinks }
    </div>
  );
};
