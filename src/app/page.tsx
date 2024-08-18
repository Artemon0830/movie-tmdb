'use client';
import React from 'react';

import {Provider} from "react-redux";
import {store} from "@/redux/store";
import ThemeComponent from "@/components/Theme/ThemeComponent";

const App = () => {
  return (<div>
          <ThemeComponent/>
      </div>

  );
};

export default App;