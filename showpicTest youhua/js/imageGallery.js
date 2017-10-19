/**
 * Created by ASUS on 2017/3/19.
 */
window.onload=prepareGallery;
function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var link = gallery.getElementsByTagName("a");
    for (var i = 0;i < link.length;i++){
        link[i].onclick = function(){
            return showPic(this) ? false:true;
        }
    }
}
function showPic(whichpic){
    if (!document.getElementById("placeholder")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG")return false;
    placeholder.setAttribute("src",source);
    if (document.getElementById("description")){
        var text= whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

