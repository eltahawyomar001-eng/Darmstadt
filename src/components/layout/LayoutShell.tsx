import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutShellProps {
  children: React.ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '4rem' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
