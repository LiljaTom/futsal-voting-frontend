import React from 'react';

import resetService from '../services/reset';

const Reset = () => {

    const handleReset = async() => {
        await resetService.reset();
    };

    return(
        <div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Reset;