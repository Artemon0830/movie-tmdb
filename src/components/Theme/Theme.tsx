import React, { useContext } from 'react';
import { MyContext } from "@/theme/store";

const Theme = () => {
    const { theme } = useContext(MyContext);

    return (
        <div>
            <h1>{theme === 'lightTheme' ? 'Light Theme' : 'Dark Theme'}</h1>
        </div>
    );
};

export default Theme;