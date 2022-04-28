function printMessage(){
    var text=document.getElementById('outputText').value;
    console.log(text);
    alert(text);
}

function WordCount() { 
    //alert(1);
    var text=document.getElementById('inputText').value;
    
    var size=text.trim().split(" ").length;
    console.log(size);
    document.getElementById('count').innerHTML=size;
    testButton();
  }

  function testButton(){
    var input=document.getElementById('inputText').value;
    if(input.length>0){
        document.getElementById("btnForCopy").disabled=false;
        document.getElementById("btnForSave").disabled=false;
        document.getElementById("btnForShare").disabled=false;
        document.getElementById("btnForPrint").disabled=false;
        document.getElementById("btnForDictionary").disabled=false;
        document.getElementById("btnForSimiar").disabled=false;
        document.getElementById("btnForConvert").disabled=false;
    }
    else{
        document.getElementById("btnForCopy").disabled=true;
        document.getElementById("btnForSave").disabled=true;
        document.getElementById("btnForShare").disabled=true;
        document.getElementById("btnForPrint").disabled=true;
        document.getElementById("btnForDictionary").disabled=true;
        document.getElementById("btnForSimiar").disabled=true;
        document.getElementById("btnForConvert").disabled=true;
    }
  }