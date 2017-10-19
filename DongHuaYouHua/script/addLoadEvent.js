/**
 * Created by ASUS on 2017/3/22.
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload!='function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}