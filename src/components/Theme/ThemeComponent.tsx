'use client';
import React, { useState } from 'react';
import { MyContext } from "@/theme/store";
import Theme from "@/components/Theme/Theme";
import Toggle from "@/components/Theme/Toggle";

const ThemeComponent = () => {
    let lightTheme  = {
        backgroundColor: 'white',
        color: 'black'
    }
    let darkTheme = {
        backgroundColor: 'black',
        color: 'white'
    }

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
            </MyContext.Provider>
        </div>
    );
};

export default ThemeComponent;