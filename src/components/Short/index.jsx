import React from 'react';

import cssstyles from './styles.module.scss';

const Short = ({ children }) => {

  if(typeof children === "string"){
    return (
      <p className={cssstyles.short}>{children}</p>
    );
  }else{
    const [first, ...rest] = children;
    return ( 
      <div>
        <p className={cssstyles.short}>{first}</p>
        <p>{rest}</p>
      </div>
    );
  } 
};

export default Short;