'use client';
import React, { useState } from 'react';
import { MyContext } from "@/theme/store";

const ThemeComponent = () => {
    const lightTheme = {
        backgroundColor: 'white',
        color: 'black'
    };
    const darkTheme = {
        backgroundColor: 'black',
        color: 'white'
    };

    const [globalTheme, setGlobalTheme] = useState<string>('lightTheme');

    const currentTheme = globalTheme === 'lightTheme' ? lightTheme : darkTheme;

    return (
        <div style={currentTheme}>
            <MyContext.Provider value={{
                theme: globalTheme,
                toggle: () => {
                    setGlobalTheme(prevState => prevState === 'lightTheme' ? 'darkTheme' : 'lightTheme');
                }
            }}>
                <button onClick={() => setGlobalTheme(prevState => prevState === 'lightTheme' ? 'darkTheme' : 'lightTheme')}>
                    Toggle Theme
                </button>
                <h2>Current Theme: {globalTheme}</h2>
            </MyContext.Provider>
        </div>
    );
};

export default ThemeComponent;