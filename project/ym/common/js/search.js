// 検索ボックス初期値設定
var defaultvalue = {} ; //連想配列の宣言

//初期値を定義
//defaultvalue["h-txt"] = " ショップ内検索";
defaultvalue["h-txt"] = "";

$(function(){

$(".h-txt").focus(function() { // 部品がフォーカスを得たとき
var idname = $(this).attr("id"); // フォーカスされた部品のIDを調べる
if($(this).val() == defaultvalue[idname]) { // 中身が初期値の場合
$(this).val(""); // 中身を空にする
$(this).css("color","#000000") // 色をブラックにする
}
})

$(".h-txt").blur(function() {  // 部品がフォーカスを失ったとき
setdefault($(this)) ;
})

$(".h-txt").show(function() { // 部品が最初に表示されたとき
setdefault($(this)) ;
})

$("#reset1").click(function() { // リセットボタンがクリックされたとき
$(".h-txt").each(function() {
$(this).val("") ;
setdefault($(this)) ;
})
return false;
})

})

//色をグレーにして、中身を初期値にする関数：何度も使うので関数にした
function setdefault(obj){
var idname = obj.attr("id"); // 部品のIDを調べる
if(obj.val() == defaultvalue[idname] || obj.val() == "") { // 中身が初期値、もしくは空の場合
obj.val(defaultvalue[idname]); // 中身を初期値にする
obj.css("color","#AAAAAA") // 色をグレーにする
}
}
// 検索ボックス初期値設定　end