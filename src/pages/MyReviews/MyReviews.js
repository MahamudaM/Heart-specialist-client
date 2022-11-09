import React, { useContext } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(authContext)
    return (
        <div>
            <p>hello</p>
        </div>
    );
};

export default MyReviews;