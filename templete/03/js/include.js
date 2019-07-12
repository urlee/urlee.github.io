// JavaScript Document
//include


$.ajaxSetup({cache:false});


$(function(){
 $(".mainsldrWrap").load("http://127.0.0.1:8020/myTemp/05/parts/kikaku-slider-1.html");
});


$(function(){
 $(".sliderWrap").load("http://127.0.0.1:8020/myTemp/05/parts/slider-brand-square1.html");
});

$(function(){
 $(".sliderBrandWrap").load("http://127.0.0.1:8020/myTemp/05/parts/slider-brand-square1.html");
});

$(function(){
 $(".sliderMedamaWrap").load("http://127.0.0.1:8020/myTemp/05/parts/slider-medama-square1.html");
});

$(function(){
 $(".sliderWrap2").load("http://127.0.0.1:8020/myTemp/05/parts/slider-square.html");
});

$(function(){
 $("#arrivalWrap").load("http://127.0.0.1:8020/myTemp/05/parts/new-rearrival.html");
});

$(function(){
 $("#jgLogoWrap").load("http://127.0.0.1:8020/myTemp/05/parts/l-category-jgcollection-iframe.html");
});