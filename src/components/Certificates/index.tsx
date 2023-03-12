import { SectionHeading } from '@components/SectionHeading';
import { ECertificates } from 'src/constants';
import {
  ApisLaravel, EcmaScript, ESlint,
  Frontend, JavascriptV8, Javascript,
  TypescriptEdteam, TypescriptUdemy
} from 'src/assets/certificates';
import { Certificate } from './Certificate';

interface CertificateProps {
  src: string;
};

const certificates: CertificateProps[] = [
  {
    src: TypescriptUdemy,
  },
  {
    src: Javascript,
  },
  {
    src: JavascriptV8,
  },
  {
    src: ESlint,
  },
  {
    src: Frontend,
  },
  {
    src: EcmaScript,
  },
  {
    src: TypescriptEdteam,
  },
  {
    src: ApisLaravel,
  }
];

export const Certificates = (): JSX.Element => {
  const renderCertificates = certificates.map(i => (
    <Certificate
      key={i.src}
      src={i.src}
    />
  ));

  return (
    <section className='container py-3 lg:py-10 m-auto'>
      <SectionHeading
        description={ECertificates.description}
        title={ECertificates.title}
      />
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        { renderCertificates }
      </div>
    </section>
  );
};
