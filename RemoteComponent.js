const React = require('react');

function RemoteComponent() {
  return React.createElement(
    'div',
    { style: { padding: 20, backgroundColor: '#cee' } },
    React.createElement('h2', null, 'remote SSR component'),
  );
}

module.exports = RemoteComponent;

