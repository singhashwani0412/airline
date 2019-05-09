        var air = new Vue({
          el: '#air',
          data: {
            pass: {form_vis:true, ff: "",firstname: "", lastname: "Singh", salutation: "", dob: "", govidtype: "", govid: "", email: "", phone: "", addr: ""},
            pnr: "",
            aircrafts:{
                "737-800":{rows:36, cols:['A','B','C','D','E','F'], spacing:30},
                "ERJ-190":{rows:26, cols:['A','C','D','F'], spacing:30}
            },
            flt: {form_vis:true,
              num: "", dt: "", aircraft: "ERJ-190",
              orig: "", orig_full: "", dest: "", dest_full: "",
              board: "", takeoff: "", dur: "", land: "",
              term: "", gate: "",
            },
            tkt: {form_vis:true,
              etkt: "",
              cls: "", seat: "", bags: "",
              svcs: "", notes: "",
              grp: "", seq: ""
            },
            bp: {form_vis:true},
            pm: {form_vis:true},
            seatmap: {form_vis:true}
          },
          methods: {
              fillSeat(seatNum){
                 seat=document.getElementById(seatNum);
                 seat.setAttribute("class","filled");
              },
              toggle(itm){ itm.form_vis = !itm.form_vis },
              sql_insert(itm){ return("") },
              to_json(obj){ return(JSON.stringify(obj)) },
              //this.style.width = ((this.value.length + 1) * 8) + 'px';
          },
          computed: {
              pass2json(){ return(this.to_json(this.pass)) },
              aircraft(){ return this.aircrafts[this.flt.aircraft]},
              width(){return((this.aircraft.cols.length+1)*this.aircraft.spacing)},
              length(){return((this.aircraft.rows+1)*this.aircraft.spacing)},
          },
        });
