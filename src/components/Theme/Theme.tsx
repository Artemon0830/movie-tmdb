'use client';
import React, { useContext } from 'react';
import { MyContext } from "@/theme/store";

const Theme = () => {
    const { theme,toggle } = useContext(MyContext);

    return (
        <div>
            <h1>Theme:{theme}</h1>
            <button onClick={toggle}>Toggle Theme</button>
        </div>
    );
};

export default Theme;