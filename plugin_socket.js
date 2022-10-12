import "https://cdn.socket.io/4.5.0/socket.io.min.js";

(function ({ InitializePlugin }) {
  InitializePlugin(
    "vidyoroom-extension-event-listener",
    ["PubSub", "Interact"],
    function (err, data) {
      if (err) {
        console.error("Error while invoking plugin", err);
      }
      console.log(">>>", data);
      const { userDetails, modules } = data;
      const { PubSub, Interact } = modules;

      const WSURL = "http://localhost:4000"; 
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
