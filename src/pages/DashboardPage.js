import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Context from '../context/Context';

const DashboardPage = () => {
    const { content } = useContext(Context);

    return (
        <div>
            <h1>Name:</h1>
            {content.name}
            <br />
            <h1>Email:</h1>
            {content.email}
        </div>
    )
}

export default DashboardPage