import React from 'react';
import {useAppContext} from "@/theme/store";

const Toggle = () => {
    let {toggle} = useAppContext();
    return (
        <div>
            <button onClick={toggle}>Theme</button>
        </div>
    );
};

export default Toggle;