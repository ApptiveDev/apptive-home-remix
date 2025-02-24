import type { ReactNode } from 'react';
import Header from '@components/organisms/semantic/Header';
import Footer from '../organisms/semantic/Footer';

interface PageProps {
  children?: ReactNode;
  hideHeader?: boolean;
}

function Page({ children, hideHeader }: PageProps) {
  return (
    <>
      {hideHeader
        ? null
        : <Header />
      }

      {children}
      <Footer />
    </>
  );
}

export default Page;
