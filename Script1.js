(function ({ InitializePlugin }) {

    const pluginKey = "Script1";
    const requiredModule = ["Interact"];
    const externalScripts = [];
    const callBack = function (err, data) {
        if (err) {
            console.error("Error while invoking plugin", err);
        }
        const { userDetails, modules } = data;
        const { Interact } = modules;

        Interact.RingDoorBell();
        {
            console.log("Doorbell Rings")
        }

        setTimeout(function () {

            Interact.MuteMicrophoneAsync(true).then(response => {
                console.log("Microphone muted")

            }).catch(error => {
                console.log(error)

            })

        }, 5000)

        setTimeout(function(){

        Interact.MuteMicrophoneAsync(false).then(response => {
                console.log("Microphone Unmuted")

            }).catch(error => {
                console.log(error)

            })

        }, 30000)

        setTimeout(function () {

            Interact.MuteCameraAsync(true).then(response => {
                console.log("Camera muted")

            }).catch(error => {
                console.log(error)

            })

        }, 35000)

        setTimeout(function () {

            Interact.MuteCameraAsync(false).then(response => {
                console.log("Camera Unmuted")

            }).catch(error => {
                console.log(error)

            })

        }, 50000)

        setTimeout(function () {

            Interact.MuteSpeakerAsync(true).then(response => {
                console.log("Speaker muted")

            }).catch(error => {
                console.log(error)

            })

        }, 55000)

        setTimeout(function () {

            Interact.MuteSpeakerAsync(false).then(response => {
                console.log("Speaker Unmuted")

            }).catch(error => {
                console.log(error)

            })

        }, 80000)
        //Interact.MuteMicrophoneAsync(false)


    }
    InitializePlugin(pluginKey, requiredModule, externalScripts, callBack);
})(EXTENSION_SUPPORT);
