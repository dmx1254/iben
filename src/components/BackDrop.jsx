import React from 'react';

const BackDrop = ({show, click}) => {
    return show && (
        <div className="backdrop" onClick={click}>
            
        </div>
    );
};

export default BackDrop;