        const electron = require("electron")
        const ipc = electron.ipcRenderer
        ipc.send("mainWindowLoaded")
        //fucntion ipc_register() {
            ipc.on("passManifestPayload", function(evt, res){
                let resultEl = document.getElementById("passengerManifestL")
                //console.log(res)
                res.forEach(function (item) {
                    resultEl.innerHTML += item.firstname.toString()+" "+item.lastname.toString()+"<br>"
                })
            })
        //}
        document.addEventListener("DomContentLoaded", function(event){
            // does not work
            ipc.send("mainWindowLoaded")
            ipc_register()
        })
