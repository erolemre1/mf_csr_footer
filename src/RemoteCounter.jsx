// const React = require("react");

// function RemoteCounter() {
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     const increment = () => setCount(c => c + 1);
//     window.addEventListener("remote-increment", increment);

//     console.log("remote-app mounted");
//     return () => window.removeEventListener("remote-increment", increment);
//   }, []);

//   return React.createElement("div", { id: "remote-root" }, `Sayaç: ${count}`);
// }

// module.exports = RemoteCounter;
