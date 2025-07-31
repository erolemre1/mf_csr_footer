// export default function Home() {
//   return <h1>Remote App Home Page</h1>;
// }



const React = require('react');

function App() {
  return (
    React.createElement('div', null,
      React.createElement('main', null,
        React.createElement('p', null, 'tüm uygulamanın SSR tarafında')
      )
    )
  );
}

module.exports = App;
