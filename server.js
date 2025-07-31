// // react component render

// require('@babel/register')({
//   extensions: ['.js', '.jsx']
// });
  
// // const express = require('express');
// // const React = require('react');
// // const ReactDOMServer = require('react-dom/server');

// // const RemoteComponent = require('./RemoteComponent.js');


// // const app = express();

// // app.get('/microfrontend', (req, res) => {
// //   try {
// //     const html = ReactDOMServer.renderToString(
// //       React.createElement(RemoteComponent)
// //     );

// //     res.send(`
// //       <!DOCTYPE html>
// //       <html>
// //         <head><title>Remote SSR</title></head>
// //         <body>
// //           <div id="remote-root">${html}</div>
// //         </body>
// //       </html>
// //     `);
// //   } catch (error) {
// //     console.error('SSR ERROR:', error);
// //     res.status(500).send('<h1>Remote render error</h1><pre>' + error + '</pre>');
// //   }
// // });

// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(` http://localhost:${PORT}/microfrontend`);
// // });

// //react index render

// const path = require('path');
// const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');

// const App = require('./src/pages/index.jsx');

// const app = express();

// app.get('/microfrontend', (req, res) => {
//   try {
//     const html = ReactDOMServer.renderToString(
//       React.createElement(App)
//     );

//     const fullPage = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>Remote SSR App</title>
//         </head>
//         <body>
//           <div id="remote-root">${html}</div>
//         </body>
//       </html>
//     `;

//     res.send(fullPage);
//   } catch (err) {
//     console.error('SSR error:', err);
//     res.status(500).send('Sunucu hatası');
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(` http://localhost:${PORT}/microfrontend`);
// });


// // // vue js

// require('@babel/register')({
//     extensions: ['.js', '.jsx']
//   });
  
// const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const App = require('./src/pages/index.jsx');

// const server = express();

// // server.use(express.static('public'));

// server.get('/microfrontend', (req, res) => {
//   const html = ReactDOMServer.renderToString(React.createElement(App));

//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <title>SSR App</title>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <link rel="stylesheet" href="/styles.css" />
//     </head>
//     <body>
//       <div id="root">${html}</div>
//     </body>
//     </html>
//   `);
// });

// const PORT = 5000;
// server.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}/microfrontend`);
// });

/// scriptsiz html

// const express = require('express');
// const cors = require('cors');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// const App = require('./src/pages/index.jsx');
// require('@babel/register')({
//   extensions: ['.js', '.jsx']
// });



// app.use(cors());

// app.use(express.static(path.join(__dirname, 'src')));

// app.get('/microfrontend', (req, res) => {
//   const html = ReactDOMServer.renderToString(React.createElement(App));
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <title>SSR App</title>
//     </head>
//     <body>
//       <div id="root">${html}</div>
//     </body>
//     </html>
//   `);
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}/microfrontend`);
// });


///script dahil  html

const express = require('express');
const cors = require('cors');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'public')));

const rendererApp =require('./src/pages/index.jsx').default || require('./src/pages/index.jsx');

require('@babel/register')({
  extensions: ['.js', '.jsx']
});

app.get('/microfrontend', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(rendererApp));
  
  const clientScript = fs.readFileSync(path.join(__dirname, 'public', 'client.bundle.js'), 'utf8');

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>SSR App</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script type="module">
        ${clientScript}
      </script>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/microfrontend`);
});


// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')));

// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const Counter = require('./src/pages/index.jsx');


// app.get('/microfrontend', (req, res) => {
//   const html = ReactDOMServer.renderToString(React.createElement(Counter));
//   res.send(html);
// });

// app.listen(5000, () => {
//   console.log('Server çalışıyor http://localhost:5000/microfrontend');
// });












// const express = require('express');
// const cors = require('cors');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const path = require('path');

// require('@babel/register')({
//   extensions: ['.js', '.jsx'],
// });

// const App = require('./src/RemoteCounter.jsx');

// const app = express();
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/microfrontend', (req, res) => {
//   const html = ReactDOMServer.renderToString(React.createElement(App));
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head><title>Remote App</title></head>
//     <body>
//       <div id="remote-root">${html}</div>
//       <script type="module" src="/client.bundle.js"></script>
//     </body>
//     </html>
//   `);
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Remote app running on http://localhost:${PORT}/microfrontend`));
