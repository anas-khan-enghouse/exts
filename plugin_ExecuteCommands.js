(function ({ InitializePlugin }) {
  const pluginKey = "plugin_ExecuteCommands";
  const requiredModule = ["PubSub", "Interact"];
  const externalScripts = [];
  const callBack = function (error, data) {
    if (error) {
      console.error("Error while invoking plugin", error);
    }
    const { userDetails, modules } = data;
    const { PubSub, Interact } = modules;

    /*
    Interact.MuteMicrophoneAsync(true)
      .then((response) => {})
      .catch((error) => {});

    Interact.MuteCameraAsync(true)
      .then((response) => {})
      .catch((error) => {});

    Interact.MuteSpeakerAsync(true)
      .then((response) => {})
      .catch((error) => {});

    Interact.RingDoorBell();
    */

    
  };
  InitializePlugin(pluginKey, requiredModule, externalScripts, callBack);
})(EXTENSION_SUPPORT);
