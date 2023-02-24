import { useMediaQuery } from 'react-responsive';

export interface IMediaQuery{
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

export const withMediaQuery = (Component: any) => {
  return (props: any) => {

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
      <Component 
        {...props}
        isDesktop={isDesktop}
        isTablet={isTablet}
        isMobile={isMobile} />
    );
  };
};