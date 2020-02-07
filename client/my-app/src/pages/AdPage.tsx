import React from 'react';
import { useParams } from 'react-router-dom';


const AdPage = () => {
    let { AdId } = useParams();
  
    return (
      <div>
        <h3>{AdId}</h3>
      </div>
    );
  }
  
  export default AdPage;