import { useEffect, useState } from 'react';
import { EBreakpoints } from 'src/constants';
// import breakpoints from '@utils/responsiveBreakpoints';

type Responsive = Record<ResponsiveBreakpoints, boolean>;
type ResponsiveBreakpoints = (
  'xxs' | 'xs' |
  'sm' | 'md' |
  'lg' | 'xl' | 'xxl'
);

export const useWindowSize = (): { responsive: Responsive } => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => { setSize(window.innerWidth); };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  return {
    responsive: {
      xxs: size < EBreakpoints.XS,
      xs: size >= EBreakpoints.XS,
      sm: size >= EBreakpoints.SM,
      md: size >= EBreakpoints.MD,
      lg: size >= EBreakpoints.LG,
      xl: size >= EBreakpoints.XL,
      xxl: size >= EBreakpoints.XXL,
    },
  };
};
