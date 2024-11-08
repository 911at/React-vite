//In React, useParams is a hook from the react-router-dom library, and it's commonly used to access URL parameters in a component.

import React from 'react';
import { useParams } from 'react-router-dom';

const Params = () => {
    const {id} = useParams();
    // Use id to access the URL parameter
    return (
      <section className='landing-section'>
          <div className='row-container'>
              <div className='landing-div'>
                  <h1 className='landing-heading'>User ID: {id}</h1>
              </div>
          </div>
      </section>
    );
};

export default Params;
