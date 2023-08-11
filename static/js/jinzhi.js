window.onload=function(){
    var $msg = "请尊重劳动成果！不要白嫖鬼汐酱QAQ";
    document.onkeydown=function(){
        var e = window.event||arguments[0];
        if(e.keyCode==123){
            //F12
            alert($msg);
            return false;
        }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
            //ctrl + shift + i
            alert($msg);
            return false;
        }else if((e.ctrlKey)&&(e.keyCode==85)){
            //ctrl + U
            alert($msg);
            return false;
        }else if((e.ctrlKey)&&(e.keyCode==83)){
            //ctrl + U
            alert($msg);
            return false;
        }
    }
    document.oncontextmenu=function(){
        //右击
        alert($msg);
        return false;
    }
}
