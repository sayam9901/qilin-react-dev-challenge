import React, { useEffect } from 'react';
//   this is my logger component that is a high order component
//   taking a compoentn as a parameter
const Logger = WrappedComponent => {
  const WithLogging = props => {

    // in the functional compoennt we use the useeffect hooks
    // for lifecycle method at first render the the component is Mounted
    // on return the component is unmounted and 
    // after another render if useffect showing the updating
    // phase of the compoennt lifecycle
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);

      return () => {
        console.log(`Component ${WrappedComponent.name} will unmount`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} updated`);
    });

    return <WrappedComponent {...props} />;
  };

  return WithLogging;
};

export default Logger;