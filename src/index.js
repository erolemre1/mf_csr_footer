import React from 'react';
import ReactDOM from 'react-dom/client';
import Widget from './Widget.jsx';


const App = () => (
  <div>
    <Widget />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
