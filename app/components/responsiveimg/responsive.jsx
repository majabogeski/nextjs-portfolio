"use client"
import dynamic from 'next/dynamic';
import React from 'react';
import { useWindowSize } from '@react-hook/window-size';

const DynamicImage = dynamic(() => import('next/image'), {
  ssr: false,
});

const ResponsiveImage = ({ desktopSrc, mobileSrc, alt }) => {
  const [width] = useWindowSize();
  const useMobileAssets = width <= 767; // Set your desired breakpoint here

  return (
    <div>
      <DynamicImage
        src={useMobileAssets ? mobileSrc : desktopSrc}
        alt={alt}
        loading="eager" // Load the image immediately
        priority={true} // Add the priority attribute
      />
    </div>
  );
};

export default ResponsiveImage;
