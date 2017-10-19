/**
 * Created by ASUS on 2017/3/23.
 */
function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById) return false;
    var elem = document.getElementById("message");
    elem.style.color="#9cc";
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement("message",200,100,10);
}
addLoadEvent(positionMessage);