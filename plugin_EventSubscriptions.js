(function ({ InitializePlugin }) {
  alert('plugin loaded')
  const pluginKey = "plugin_EventSubscriptions";
  const requiredModule = ["PubSub", "Interact"];
  const externalScripts = [];
  const callBack = function (error, data) {
    if (error) {
      console.error("Error while invoking plugin", error);
    }
    const { userDetails, modules } = data;
    const { PubSub, Interact } = modules;
    alert('plugin invoked')
    const microphoneEvents = PubSub.subscribe(
      "MicrophoneEvents",
      function (eventData) {
        console.log(">> Microphone event triggered", eventData);
      }
    );

    const cameraEvents = PubSub.subscribe("CameraEvents", function (eventData) {
      console.log(">> Camera event triggered", eventData);
    });

    const speakerEvents = PubSub.subscribe(
      "SpeakerEvents",
      function (eventData) {
        console.log(">> Speaker event triggered", eventData);
      }
    );

    const roomEnterEvent = PubSub.subscribe(
      "RoomEnter",
      function (eventData) {
        console.log(">> Room Enter event triggered", eventData);
      }
    );

    const roomExitEvent = PubSub.subscribe(
      "RoomExit",
      function (eventData) {
        console.log(">> Room Exit event triggered", eventData);
      }
    );


    /*
    microphoneEvents.unsubscribe();
    cameraEvents.unsubscribe();
    speakerEvents.unsubscribe();
    roomEnterEvent.unsubscribe();
    roomExitEvent.unsubscribe();
    */
  };
  InitializePlugin(pluginKey, requiredModule, externalScripts, callBack);
})(EXTENSION_SUPPORT);
