

var FirstName=label("label","for","FirstName","FirstName");
var a=linebreak("br");
var firstinput=input("input","type","text","id","FirstName");
var a1=linebreak("br");
var LastName=label("label","for","LastName","LastName");
var a2=linebreak("br");
var LastInp=input("input","type","text","id","LastName");
var a3=linebreak("br");

var email=label("label","for","email","Email");
var a4=linebreak("br")
var inputemail=input("input","type","email","id","email");
var a5=linebreak("br");
var pass=label("label","for","pass","password");
var a6=linebreak("br")
var inputpass=input("input","type","password","id","pass");
var a7=linebreak("br");
var Phone=label("label","for","Phone","PhoneNumber");
var a8=linebreak("br");
var phoinput=input("input","type","text","id","Phone");
var a9=linebreak("br");
 var button=label("button","type","button","summit");

document.body.append(FirstName,a,firstinput,a1,LastName,a2,LastInp,a3,email,a4,inputemail,a5,pass,a6,inputpass,a7,Phone,a8,phoinput,a9,button);

function label(tagname,attrname,attrvalue,content){
   
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.innerHTML=content;
    return element;
  
 
}

function input(tagname,attrname,attrvalue,attrname1,attrvalue1){
var input=document.createElement(tagname);
input.setAttribute(attrname,attrvalue);
input.setAttribute(attrname1,attrvalue1);
return input;
}

function linebreak(br){
    var b1=document.createElement(br);
    return b1;

}