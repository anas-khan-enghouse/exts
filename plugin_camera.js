(function ({ PubSub }) {
  /*
// Interact Object Properties 
Interact.MuteMicrophoneAsync : method
Interact.MuteCameraAsync : method
Interact.MuteSpeakerAsync : method
Interact.StartOneToOneAsync : method
Interact.StopOneToOneAsync : method
Interact.UpdatePrivacyModeAsync : method
Interact.RingDoorBell : method

// PubSub Object Properties
PubSub.subscribe : method
<PubSubObjectInstance>.unsubscribe : method
*/


  const CameraEvents = new PubSub.subscribe("CameraEvents", (eventDetails) => {
    console.log(">>>> CameraEvents", eventDetails);
  });
  const CameraEvents2 = new PubSub.subscribe("CameraEvents", (eventDetails) => {
    console.log(">>>> CameraEvents2", eventDetails);
  });
  

})(EXTENSION_SUPPORT);
