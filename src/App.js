import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

function App() {
  return (
    <div className="flex flex-row items-center justify-center ">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;