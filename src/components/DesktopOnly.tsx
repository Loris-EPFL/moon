import React, { ReactNode, useState, useEffect } from 'react';

interface DesktopOnlyProps {
  children: ReactNode;
  [x: string]: any;
}

// components wrapper to for desktop only components
export default function DesktopOnly({ children, ...delegated }: DesktopOnlyProps) {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}