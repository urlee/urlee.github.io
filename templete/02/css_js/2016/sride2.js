(function($) {
$(function(){
var _imgNum = 0;//����E��翁E
var _imgSize = 0;//����EΥ�����
var _current = 0;//���ߤβ���E
var _timer = 100000;//�����ޡ�����



//�ƥܥ��������
$('#container2').append('<a href="#" onFocus="this.blur()"><img src="http://192.168.24.135:8020/myTemp/03/images/common/2012_arrow_l.gif" id="btn-prev2" /></a><a href="#" onFocus="this.blur()"><img src="http://192.168.24.135:8020/myTemp/03/images/common/2012_arrow_r.gif" id="btn-next2" /></a>');

//����E���������
_imgSize = $('#banner2 ul li').width();

//�ᥤ�����Eο���������E֤�
$('#banner2 ul li').each(function(){
//����E򤺤餷�Ƴ�������
$(this).css('margin-left', -_imgSize);
//����Eο������ڡ����͡������ܥ�����ܮ
if (_imgNum == _current) {
//current���ä��饢���ƥ��֡��ᥤ��β���E�ɽ��
$('#pagenation2 ul').append('');
$(this).css('margin-left', '0px');
} else {
$('#pagenation2 ul').append('');
}
//��E��פο��򥫥���Ȥ���_imgNum������E�E
_imgNum++;
});

//��E�E��֤��Ȥ�imageMove��¹�
var loopSwitch = setInterval(loop, _timer);
function loop() {
imageMove(_current +1);
}

//�ܥ���򥯥�Eå�
$('#btn-prev2').click(function(e){
e.preventDefault();
imageMove(_current -1);
});
$('#btn-next2').click(function(e){
e.preventDefault();
imageMove(_current +1);
});
//�ڡ����͡�����󥯥�Eå�
$('#pagenation2 ul li').click(function(e) {
e.preventDefault();
var thisNum = $('#pagenation2 li').index(this);
//�������ܥ��󤬸��ߤβ���E���ʤ��ä���¹�
if(thisNum  != _current) {
imageMove(thisNum );
}
});

function imageMove(next) {
//��E��׻��֥�E��å�
clearInterval(loopSwitch);
loopSwitch = setInterval(loop, _timer);
//���β���E����β���E褁E������ä��鱦�����֡ʾ������ä��麸��
var pos;
if (_current < next) {
pos = -_imgSize;
} else {
pos = _imgSize;
}

//���β���E��Ǹ�ʤ�E���ܡ������ܤʤ�Ǹ�E
if (next == _imgNum) {
next = 0;
} else if(next == -1) {
next = (_imgNum-1);
}

//���β���E�ư����
$("#banner2 li").eq(next)
//���β���E򼡤ΰ��֤�����
.css("margin-left", -pos)
.animate({
marginLeft: "0"
},"fast");

//���ߤβ���E�ư����
$("#banner2 li").eq(_current)
.animate({
marginLeft: pos
},"fast");

//�ڡ����͡�����󸽺ߤΤ�ä����Τ򥢥��ƥ��֤�
$('#pagenation2 li').eq(_current).removeClass('active');
$('#pagenation2 li').eq(next).addClass('active');

//���ߤ��ֹ�򼡤��ֹ�ˤ���E�
_current = next;
}
});
})(jQuery);