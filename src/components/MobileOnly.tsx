import React, { ReactNode, useState, useEffect } from 'react';

interface MobileOnlyProps {
  children: ReactNode;
  [x: string]: any;
}

// components wrapper for mobile-only components
export default function MobileOnly({ children, ...delegated }: MobileOnlyProps) {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}