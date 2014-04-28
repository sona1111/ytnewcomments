
$(document).ready(function(){

//console.log(document.URL.substring(0, 23));

if (document.URL.substring(0, 23) == "https://plus.googleapis" || document.URL.substring(0, 23) == "https://apis.google.com") {
    
    flag = false;
    if(inIframe() == true){
        tryTimer = setInterval(attemptClick, 200);
    }else{};
    /*
    setTimeout(doSomething, 100);
    setTimeout(doSomething, 500);
    setTimeout(doSomethingElse, 900);
    setTimeout(doSomethingElse, 1300);
    */

    
    
    
}

function attemptClick(){

    try{
    doSomething();
    doSomething();
    doSomethingElse();
    doSomethingElse();    
    flag = checkStatus();
    }catch(e){
    };    
    
    
    if(flag == true){
        clearInterval(tryTimer);
    }else{};

};


function checkStatus(){

    var el = getElementByXpath('//*[@id="widget_bounds"]/div[2]/div[4]/div[1]/div/div[1]/div/div[2]/div[1]');
    return (el.innerHTML == "Newest first");

};

function getElementByXpath(path) {
    return document.evaluate(path, document, null, 9, null).singleNodeValue;
};

function dispatchMouseEvent(target, var_args) {
          var e = document.createEvent("MouseEvents");
          e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
          target.dispatchEvent(e);
        };




function doSomething(){
    
    var el = getElementByXpath('//*[@id="widget_bounds"]/div[2]/div[4]/div[1]/div/div[1]/div/div[2]/div[1]');
    
    
    //console.log(el);


        dispatchMouseEvent(el, 'mouseover', true, true);
        dispatchMouseEvent(el, 'mousedown', true, true);
        dispatchMouseEvent(el, 'click', true, true);
        dispatchMouseEvent(el, 'mouseup', true, true);
};

function doSomethingElse(){

var el2 = getElementByXpath('/html/body/div[2]/div[2]');
    
    //console.log(el2);


    dispatchMouseEvent(el2, 'mouseover', true, true);
        dispatchMouseEvent(el2, 'mousedown', true, true);
        dispatchMouseEvent(el2, 'click', true, true);
        dispatchMouseEvent(el2, 'mouseup', true, true);
        
};
    
function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
    
}

});
