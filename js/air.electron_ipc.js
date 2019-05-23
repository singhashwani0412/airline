        const electron = require("electron")
        const ipc = electron.ipcRenderer
        ipc.send("mainWindowLoaded")
        //fucntion ipc_register() {
            ipc.on("passManifestPayload", function(evt, res){
                let resultEl = document.getElementById("passengerManifestL")
                resultEl.innerHTML = ""
                //console.log(res)
                res.forEach(function (pass) {
                    resultEl.innerHTML += pass.seat+" "+pass.firstname.toString()+" "+pass.lastname.toString()+"<br>"
                    //ipc.send("setSeat",pass.seat)
                    //fillSeat(pass.seat)
//document.getElementById("pass_seat").addEventListener('build', function (e) { /* ... */ }, false);
document.getElementById("pass_seat").value = pass.seat
//document.getElementById(pass.seat).className = 'filled'
document.getElementById(pass.seat).setAttribute('class', 'filled')
//document.getElementById("pass_seat").dispatchEvent(new Event('onblur'))
                })
            })
        //}
        document.addEventListener("DomContentLoaded", function(event){
            // does not work
            ipc.send("mainWindowLoaded")
            ipc_register()
        })
