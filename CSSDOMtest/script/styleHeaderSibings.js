/**
 * Created by ASUS on 2017/3/22.
 */
addLoadEvent(styleHeaderSibings);
function styleHeaderSibings(){
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;

    for(var i=0; i<headers.length;i++){
        elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
        elem.style.color = "#9cc";

    }
}
function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}


