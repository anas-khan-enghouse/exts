(function ({ InitializePlugin }) {

  const pluginKey = "Eventtriggereddata";
  const requiredModule = ["PubSub","Interact"];
  const externalScripts = [];
  const callBack = function (err, data) {
    if (err) {
      console.error("Error while invoking plugin", err);
    }
    const { userDetails, modules } = data;
    const { PubSub} = modules;
    const { Interact} = modules;
    
    const micEventSubscription = PubSub.subscribe("MicrophoneEvents",(eventDataPayload)=>{
       // Callback when subscribed event is triggerd.     
     //const {requestedState} = eventDataPayload
     console.log(eventDataPayload)     
     //console.log(eventDataPayload.details.requesetedToMute)
     var ts = new Date(eventDataPayload.timeStamp);
     //console.log(ts.toGMTString());     
     alert(ts.toGMTString()+" Micstatus= "+JSON.stringify(eventDataPayload.details.requesetedToMute))  
           
        
     })

    const camEventSubscription = PubSub.subscribe("CameraEvents",(eventDataPayload)=>{
       // Callback when subscribed event is triggerd.     
     //const {requestedState} = eventDataPayload
     console.log(eventDataPayload)     
     //console.log(eventDataPayload.details.requesetedToMute)
     var ts = new Date(eventDataPayload.timeStamp);
     //console.log(ts.toGMTString());     
     alert(ts.toGMTString()+" Camerastatus= "+JSON.stringify(eventDataPayload.details.requesetedToMute))     
         

     })

    const speakerEventSubscription = PubSub.subscribe("SpeakerEvents", (eventDataPayload) => {
          // Callback when subscribed event is triggerd.     
          //const {requestedState} = eventDataPayload
          console.log(eventDataPayload)
          //console.log(eventDataPayload.details.requesetedToMute)
          var ts = new Date(eventDataPayload.timeStamp);
          //console.log(ts.toGMTString());     
          alert(ts.toGMTString() + " Speakerstatus= " + JSON.stringify(eventDataPayload.details.requesetedToMute))  

    
      })

    const roomEnterSubscription = PubSub.subscribe("RoomEnter", (eventDataPayload) => {
          // Callback when subscribed event is triggerd.     
          //const {requestedState} = eventDataPayload
          console.log(eventDataPayload)
          //console.log(eventDataPayload.details.requesetedToMute)
          var ts = new Date(eventDataPayload.timeStamp);
          //console.log(ts.toGMTString());     
          alert(ts.toGMTString() + " RoomEnterstatus= " + JSON.stringify(eventDataPayload.details.method) +"id"+ JSON.stringify(eventDataPayload.details.id))


      })

     const roomExitSubscription = PubSub.subscribe("RoomExit", (eventDataPayload) => {
          // Callback when subscribed event is triggerd.     
          //const {requestedState} = eventDataPayload
          console.log(eventDataPayload)
          //console.log(eventDataPayload.details.requesetedToMute)
          var ts = new Date(eventDataPayload.timeStamp);
          //console.log(ts.toGMTString());     
          alert(ts.toGMTString() + " RoomExitstatus= " + JSON.stringify(eventDataPayload.details.method))


      })
     Interact.MuteMicrophoneAsync(true).then(response => {
          alert("Microphone Muted")

      }).catch(error => {
          console.log(error)

      })

     setTimeout(function () {

          Interact.MuteMicrophoneAsync(false).then(response => {
              alert("Microphone Unmuted")

          }).catch(error => {
              console.log(error)

          })

      }, 60000)

      // TODO Plugin code goes here
    
    
  };
  InitializePlugin(pluginKey, requiredModule, externalScripts, callBack);
})(EXTENSION_SUPPORT);
