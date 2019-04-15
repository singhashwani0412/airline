aircrafts={
    "737-800":{rows:36, cols:['A','B','C','D','E','F']},
    "ERJ-190":{rows:26, cols:['A','C','D','F']}
}

function buildHtml(aircraft){
    rows = aircrafts[aircraft].rows;
    row = aircrafts[aircraft].cols;
    var seats = '';
    spacing=30;
    width = (row.length+1)*spacing;
    length = (rows+1)*spacing;
    for (var i = 1; i <= rows; i++) {
        for (var j in row){
            seats += `        <circle class='empty' cx='${i*spacing-10}' cy='${width-j*spacing-18}' r='12' id='${i}${row[j]}' />\n`;
            seats += `        <text x='${i*spacing-18}' y='${width-j*spacing-18+4}'>${i}${row[j]}</text>\n`;
        }
    }
    return (
      '    <svg width="${length}" height="${width}">\n'
    + '        <rect x="0" y="0" width="${length}" height="${width}"/>\n'
    + seats
    + '    </svg>'

    );
};
function fillSeat() {
     seatNum = document.getElementById('seat').value;
     // return if seatNum not valid or not found
     seat=document.getElementById(seatNum);
     seat.setAttribute("class","filled");
}
