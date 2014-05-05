
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
    sel = doSomething();
    sel = doSomething();
    doSomethingElse(sel);
    doSomethingElse(sel);
    flag = checkStatus();
    }catch(e){console.log(e);
    };    
    
    
    if(flag == true){
        clearInterval(tryTimer);
    }else{};

};

//function to be called to see if the change was successful. Uses brute force search because speed is not apperant to user. 
function checkStatus(){
                                
    var el = $('div').filter(function(){return $(this).text() === 'Newest first';});
    if(($(el).css('display') == 'inline-block') && (typeof($(el).css('display')) !== 'undefined')){
    return true;
    }else{return false;
    };
};

function getElementByXpath(path) {
    return document.evaluate(path, document, null, 9, null).singleNodeValue;
};

//actual mechanics of simulating the mouse click. 
function dispatchMouseEvent(target, var_args) {
          var e = document.createEvent("MouseEvents");
          e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
          target.dispatchEvent(e);
        };


function find1Elem(){

    //attempt to find by a brute force search
    var el = $('div').filter(function(){return $(this).text() === 'Top comments';});
    
    //if that fails try the last known xpath
    if(el.length == 0){
        return getElementByXpath('//*[@id="widget_bounds"]/div[2]/div[4]/div[1]/div/div[1]/div/div[2]/div[1]');
    }else{
        return el[0];
    }
    

};

function find2Elem(el1){

    //attempt to find by looking in the children of the last found element
    el = $(el1).parent().filter(function(){return $(this).text() === 'Newest first';});
    
    //next, look by a brute force search
    //disabled because it overrides the first method on the first couple of function calls
    /*
    if(el.length == 0){
        el = $('div').filter(function(){return $(this).text() === 'Newest first';});
    }*/
    
    //if all of that fails try the last xpath
    if(el.length == 0){
        return getElementByXpath('/html/body/div[2]/div[2]');
    }else{
        return el[0];
    }
    

};


//function to call the mouse click on the outer menu
function doSomething(){
                                
    var el = find1Elem()
    
    
    


        dispatchMouseEvent(el, 'mouseover', true, true);
        dispatchMouseEvent(el, 'mousedown', true, true);
        dispatchMouseEvent(el, 'click', true, true);
        dispatchMouseEvent(el, 'mouseup', true, true);
        return el;
};

//then call the mouse click on the inner menu
function doSomethingElse(el1){


    var el2 = find2Elem(el1);
    
   


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
