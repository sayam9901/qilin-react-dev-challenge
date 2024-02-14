import React, { lazy, Suspense } from 'react';
// this the lazy loading where we loading an another compoentn 
// after the lazy loading is done

const AboutLazy = lazy(() => import('./LazyAbout'));

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      {/* Suspense is tag that is use to show a loading indicator while our compoennt is being loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <AboutLazy />
      </Suspense>
    </div>
  );
};

export default About;