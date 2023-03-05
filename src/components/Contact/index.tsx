import Gmail from '@assets/maildotru.svg';
import Whatsapp from '@assets/whatsapp.svg';
import { useWindowSize } from 'src/hooks/useWindowSize';
import CV from '@assets/cv.pdf';
import { EContact } from 'src/constants';

export const Contact = (): JSX.Element => {
  const { responsive, } = useWindowSize();

  return (
    <div className='bg-darker py-3'>
      <div className='container m-auto text-white text-sm flex justify-center md:justify-between'>
        {(responsive.md)
          ? (
            <div>
              {EContact.Hiring}
              <a
                className='text-main underline'
                download="CV Abraham Mamani - Frontend React Developer"
                href={CV}
              >
                {EContact.Download}
              </a>
            </div>
            )
          : null}
        <div className='flex flex-col items-center md:flex-row md:justify-end gap-2 md:gap-4'>
          <div className='flex gap-2'>
            <img
              alt="Email icon"
              className='h-5'
              src={Gmail}
            />
            <span>
              {EContact.Email}
            </span>
          </div>
          <div className='flex gap-2'>
            <img
              alt="Whatsapp icon"
              className='h-5'
              src={Whatsapp}
            />
            <span>
              {EContact.Phone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
