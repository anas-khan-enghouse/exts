
var script = document.createElement("script");
script.src = "https://cdn.socket.io/4.5.0/socket.io.min.js";
script.type = "text/javascript";
script.id = "https://cdn.socket.io/4.5.0/socket.io.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

(function ({ InitializePlugin }) {
  InitializePlugin(
    "plugin_socket",
    ["PubSub", "Interact"],
    function (err, data) {
      if (err) {
        console.error("Error while invoking plugin", err);
      }
      console.log(">>>", data);
      const { userDetails, modules } = data;
      const { PubSub, Interact } = modules;

      const WSURL = "https://qa-vrpms-api.vidyo.us.rd.eilab.biz"; 
      const socket = io(WSURL, {
        transports: ["websocket"],
        auth: { userPortalId: "1554773" },
        withCredentials: true,
        extraHeaders: {
          "my-custom-header": "abcd",
        },
      });
      socket.on("connect", () => {
        alert("connected");
      });

      socket.on("connect_error", () => {
        alert("Error while connecting");
      });
    }
  );
})(EXTENSION_SUPPORT);
