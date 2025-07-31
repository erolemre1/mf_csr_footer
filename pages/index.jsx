


// // // server kullanım yok state yok 

// const React = require("react");

// function App() {
//   return (
//     <div className="grid min-h-screen p-8 pb-20">
//       <main className="flex flex-col items-center">
//         <img src="/next.svg" alt="Next.js logo" width="180" height="38" />
//         <img src="/file.svg" alt="Next.js logo" width="180" height="38" />
//         <div>
//          JSX çalışıyor tüm uygulama clientta birleşiyor
//         </div>
//       </main>
//     </div>
//   );
// }

// module.exports = App;


// // // // //server kkullanım state management

const React = require("react");

function RemoteCounter() {
  const [count, setCount] = React.useState(0);
  const [username, setUsername] = React.useState('-');

  React.useEffect(() => {
    const increment = () => setCount(c => c + 1);
    window.addEventListener("remote-increment", increment);

    console.log("remote-app gelddii 11");

    const handleData = (event) => {
      console.log("Remote: veri", event.detail);
      setUsername(event.detail.username);
    };
    window.addEventListener("remote-data", handleData);

    return () => {
      window.removeEventListener("remote-increment", increment);
      window.removeEventListener("remote-data", handleData);
    };
  }, []);

  return React.createElement(
    "div",
    { id: "remote-root" },
    `Sayaç dee: ${count}`,
    React.createElement("div", null, `Kullanıcı 2222: ${username ?? "-"}`)
  );
}

module.exports = RemoteCounter;

