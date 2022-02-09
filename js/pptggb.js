// by Zhou Bingzhen
var strs = ggbs;
var ggbpure = "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";
if(strs[0]==""){
	strs[0] = ggbpure;
};
var c = 0;
var n = strs.length;

var cl = "";
if(bb){cl = "black";}else{cl = "white";}


var parameters = {
	"id": "ggbApplet",
	"width":mywidth,
	"height":myheight,
	"enableShiftDragZoom":true,
	"showMenuBar":bb,  
	"showAlgebraInput":bb,
	"showAlgebraInput":bb,
	"showToolBar":bb,
	"borderColor":cl,
	"ggbBase64": strs[c],
	"language":"en",
};
var applet = new GGBApplet(parameters,  '5.0');  


applet.setHTML5Codebase('./geogebra/5.0/web3d/');
window.onload = function() {applet.inject('ggbApplet');}; 

function saveGgbBase(){ 
	ggbApplet.getBase64(); 
};


document.getElementById("tolpages").value = n;

document.getElementById("Cpages").value = c+1;

function SetPage(){
	saveGgbBase();
	strs[c] = ggbApplet.getBase64();
	c = document.getElementById("Cpages").value - 1;
	ggbApplet.setBase64(strs[c]);
};

function Previous(){
	saveGgbBase();
	strs[c] = ggbApplet.getBase64();
	if(c==0){
		c = n - 1;
	}else{
		c = c - 1;
	}
	ggbApplet.setBase64(strs[c]);
	document.getElementById("Cpages").value = c+1;
	
};
function Next(){
	saveGgbBase();
	strs[c] = ggbApplet.getBase64();
	if(c== n-1){
		c = 0;
	}else{
		c = c + 1;
	}
	ggbApplet.setBase64(strs[c]);
	document.getElementById("Cpages").value = c+1;
};
function First(){
	saveGgbBase();
	strs[c] = ggbApplet.getBase64();
	c = 0;
	ggbApplet.setBase64(strs[c]);
	document.getElementById("Cpages").value = c+1;
};
function Last(){
	saveGgbBase();
	strs[c] = ggbApplet.getBase64();
	c = n-1;
	ggbApplet.setBase64(strs[c]);
	document.getElementById("Cpages").value = c+1;
};

function AddPage(){
	saveGgbBase();
	strs[c] = ggbApplet.getBase64();
	strs.splice(c+1, 0, ggbpure);
	n = n + 1;
	c = c + 1;
	ggbApplet.setBase64(ggbpure);
	document.getElementById("Cpages").value = c+1;
	document.getElementById("tolpages").value = n;
};

function ClonePage(){
	saveGgbBase();
	strs[c] = ggbApplet.getBase64();
	strs.splice(c+1, 0, ggbApplet.getBase64());
	n = n + 1;
	c = c + 1;
	ggbApplet.setBase64(ggbApplet.getBase64());
	document.getElementById("Cpages").value = c+1;
	document.getElementById("tolpages").value = n;
};


function DeletePage(){
	if(n!=1){
		strs.splice(c,1);
		n = n - 1;
		if(c==0){c = 0;}else{c = c - 1;}
		ggbApplet.setBase64(strs[c]);
		document.getElementById("Cpages").value = c+1;
		document.getElementById("tolpages").value = n;
	};
};


var btct = 0;
function Hidebt(){
	if(btct == 0){
		document.getElementById("bt").style.display="none";
		btct = 1;
	}
	else if(btct == 1){
		document.getElementById("bt").style.display="";
		btct = 0;
	}
};
document.onkeydown = function(){
	// if((event).keyCode==40 || (event).keyCode==39)
	// 	Next();
	// if((event).keyCode==37 || (event).keyCode==38)
	// 	Previous();
	if(event.keyCode==40)
		Next();
	if(event.keyCode==38)
		Previous();
	if((event).keyCode==72)
		Hidebt();
	// if((event).keyCode==32)
	// 	SetPage();
};



function saveGgbFile(){ 
	ggbApplet.getBase64(function(b){
		document.getElementById("Base64").value = b;
		document.getElementById("Base64").select();
		document.execCommand("copy");
	}); 
};
function loadGgbFile(){
	var base64 = document.getElementById("Base64").value;
	if(base64.length > 20)
	{
		ggbApplet.setBase64(base64); 
	}
	else
	{
		saveGgbBase();
		ggbApplet.setBase64(ggbApplet.getBase64());
	}
};

function fresh(){ 
	saveGgbBase();
	ggbApplet.setBase64(ggbApplet.getBase64());
};

function savePPT(){ 
saveGgbBase();
strs[c] = ggbApplet.getBase64();

var tmp = "";
var chec = document.getElementsByName('kkk');
if(chec[0].checked){tmp = "false";}else{tmp = "true";}
var strxx =new Array();
strxx[0] = tmp;


strxx[0] = '<!DOCTYPE html><html><head>'+
'<meta charset="utf-8"\/><link rel="icon" href="https:\/\/kz16.top\/kz16logo.svg" type="image\/x-icon"\/><meta name=viewport content="width=device-width,initial-scale=1">'+
'<script src=".\/geogebra\/deployggb.js"><\/script>'+
'<script src=".\/js\/FileSaver.js\/FileSaver.js"><\/script>'+
'<script>'+
'var mywidth = window.innerWidth*0.9;'+
'var myheight = window.innerHeight*0.8;'+
'var bb = '+
tmp + 
';'+
'var ggbs=new Array();';

for(var i=0; i<n; i++){
	var tmpxxx = strs[i];
	strxx[i+1] = 'ggbs['+i+'] = "' + tmpxxx + '";';
};
	

strxx[n+1] = '<\/script>'+
'<\/head><body>'+
'<div align="center" id="bt">'+
'<a href="https:\/\/kz16.top\/geogebra\/ggbpptReadMe.html">教程<\/a> '+
'<a href="javascript:saveGgbFile()">保存Base64<\/a> '+
'<a href="javascript:loadGgbFile()">导入Base64<\/a>'+
'<textarea name="Base64" id="Base64" cols=20 rows=1 style="resize:none;height:16px"><\/textarea>'+
'&nbsp; '+
'<a href="javascript:savePPT()">导出离线<\/a> '+ 
'<a href="javascript:saveOnlinePPT()">导出在线<\/a> '+ 
'<label><input type="checkbox" name="kkk" value="true"></label>'+
'<textarea name="filename" id="filename" cols=8 rows=1 style="resize:none;height:16px">ggbppt<\/textarea>'+
'.html &nbsp;'+
'<a href="javascript:DeletePage()">删页<\/a> '+
'<a href="javascript:ClonePage()">克隆<\/a> '+
'<a href="javascript:AddPage()">加页<\/a> '+
'<a href="javascript:First()">首页<\/a> '+
'<a href="javascript:Previous()">上页<\/a> '+
'<a href="javascript:SetPage()">跳转 </a> '+
'<textarea name="Cpages" id="Cpages" cols=1 rows=1 style="resize:none; border-style:none;overflow:hidden;height:16px; text-align:right">1<\/textarea>'+
'\/'+
'<textarea name="tolpages" id="tolpages" cols=1 rows=1 style="resize:none; border-style:none;overflow:hidden;height:16px"><\/textarea>'+
'<a href="javascript:Next()">下页<\/a> '+
'<a href="javascript:Last()">尾页<\/a>'+
'<\/div>'+
'<center><div id="ggbApplet" ><\/div><\/center>'+
'<script src="js\/pptggb.js"><\/script>'+
'<\/body><\/html>';

var blob = new Blob(strxx, {type: "text/html ;charset=utf-8"});
var name =document.getElementById("filename").value + '.html';
saveAs(blob, name);
};



function saveOnlinePPT(){ 
saveGgbBase();
strs[c] = ggbApplet.getBase64();

var tmp = "";
var chec = document.getElementsByName('kkk');
if(chec[0].checked){tmp = "false";}else{tmp = "true";}
var strxx =new Array();
strxx[0] = tmp;


strxx[0] = '<!DOCTYPE html><html><head>'+
'<meta charset="utf-8"\/><link rel="icon" href="https:\/\/kz16.top\/kz16logo.svg" type="image\/x-icon"\/><meta name=viewport content="width=device-width,initial-scale=1">'+
'<script src="https:\/\/kz16.top\/geogebra\/deployggb.js"><\/script>'+
'<script src="https:\/\/kz16.top\/geogebra\/FileSaver.js"><\/script>'+
'<script>'+
'var mywidth = window.innerWidth*0.9;'+
'var myheight = window.innerHeight*0.8;'+
'var bb = '+
tmp + 
';'+
'var ggbs=new Array();';

for(var i=0; i<n; i++){
	var tmpxxx = strs[i];
	strxx[i+1] = 'ggbs['+i+'] = "' + tmpxxx + '";';
};
strxx[n+1] = '<\/script>'+
'<\/head><body>'+
'<div align="center" id="bt">'+
'<a href="https:\/\/kz16.top\/geogebra\/ggbpptReadMe.html">教程<\/a> '+
'<a href="javascript:saveGgbFile()">保存Base64<\/a> '+
'<a href="javascript:loadGgbFile()">导入Base64<\/a>'+
'<textarea name="Base64" id="Base64" cols=20 rows=1 style="resize:none;height:16px"><\/textarea>'+
'&nbsp; '+
'<a href="javascript:savePPT()">导出离线<\/a> '+ 
'<a href="javascript:saveOnlinePPT()">导出在线<\/a> '+
'<label><input type="checkbox" name="kkk" value="true"></label>'+
'<textarea name="filename" id="filename" cols=8 rows=1 style="resize:none;height:16px">ggbppt<\/textarea>'+
'.html &nbsp;'+
'<a href="javascript:DeletePage()">删页<\/a> '+
'<a href="javascript:ClonePage()">克隆<\/a> '+
'<a href="javascript:AddPage()">加页<\/a> '+
'<a href="javascript:First()">首页<\/a> '+
'<a href="javascript:Previous()">上页<\/a> '+
'<a href="javascript:SetPage()">跳转</a> '+
'<textarea name="Cpages" id="Cpages" cols=1 rows=1 style="resize:none; border-style:none;overflow:hidden;height:16px; text-align:right">1<\/textarea>'+
'\/'+
'<textarea name="tolpages" id="tolpages" cols=1 rows=1 style="resize:none; border-style:none;overflow:hidden;height:16px"><\/textarea>'+
'<a href="javascript:Next()">下页<\/a> '+
'<a href="javascript:Last()">尾页<\/a>'+
'<\/div>'+
'<center><div id="ggbApplet" ><\/div><\/center>'+
'<script src="https:\/\/kz16.top\/geogebra\/pptggb.js"><\/script>'+
'<\/body><\/html>';

var blob = new Blob(strxx, {type: "text/html ;charset=utf-8"});
var name =document.getElementById("filename").value + '.html';
saveAs(blob, name);
};
