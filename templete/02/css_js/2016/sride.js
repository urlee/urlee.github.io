(function($) {
$(function(){
var _imgNum = 0;//��������
var _imgSize = 0;//����Υ�����
var _current = 0;//���ߤβ���
var _timer = 100000;//�����ޡ�����

//�ƥܥ��������
$('#container').append('<a href="#" onFocus="this.blur()"><img src="http://192.168.24.135:8020/myTemp/03/images/common/2012_arrow_l.gif" id="btn-prev" /></a><a href="#" onFocus="this.blur()"><img src="http://192.168.24.135:8020/myTemp/03/images/common/2012_arrow_r.gif" id="btn-next" /></a>');

//���������
_imgSize = $('#banner ul li').width();

//�ᥤ�����ο����������֤�
$('#banner ul li').each(function(){
//����򤺤餷�Ƴ�������
$(this).css('margin-left', -_imgSize);
//����ο������ڡ����͡������ܥ�������
if (_imgNum == _current) {
//current���ä��饢���ƥ��֡��ᥤ��β����ɽ��
$('#pagenation ul').append('');
$(this).css('margin-left', '0px');
} else {
$('#pagenation ul').append('');
}
//�롼�פο��򥫥���Ȥ���_imgNum�������
_imgNum++;
});

//������֤��Ȥ�imageMove��¹�
var loopSwitch = setInterval(loop, _timer);
function loop() {
imageMove(_current +1);
}

//�ܥ���򥯥�å�
$('#btn-next').click(function(e){
e.preventDefault();
imageMove(_current +1);
});
$('#btn-prev').click(function(e){
e.preventDefault();
imageMove(_current -1);
});
//�ڡ����͡�����󥯥�å�
$('#pagenation ul li').click(function(e) {
e.preventDefault();
var thisNum = $('#pagenation li').index(this);
//�������ܥ��󤬸��ߤβ����ʤ��ä���¹�
if(thisNum  != _current) {
imageMove(thisNum );
}
});

function imageMove(next) {
//�롼�׻��֥ꥻ�å�
clearInterval(loopSwitch);
loopSwitch = setInterval(loop, _timer);
//���β���β�����¿�����ä��鱦�����֡ʾ������ä��麸��
var pos;
if (_current < next) {
pos = -_imgSize;
} else {
pos = _imgSize;
}

//���β���Ǹ�ʤ�1���ܡ������ܤʤ�Ǹ�
if (next == _imgNum) {
next = 0;
} else if(next == -1) {
next = (_imgNum-1);
}

//���β����ư����
$("#banner li").eq(next)
//���β���򼡤ΰ��֤�����
.css("margin-left", -pos)
.animate({
marginLeft: "0"
},"fast");

//���ߤβ����ư����
$("#banner li").eq(_current)
.animate({
marginLeft: pos
},"fast");

//�ڡ����͡�����󸽺ߤΤ�ä����Τ򥢥��ƥ��֤�
$('#pagenation li').eq(_current).removeClass('active');
$('#pagenation li').eq(next).addClass('active');

//���ߤ��ֹ�򼡤��ֹ�ˤ��롣
_current = next;
}
});
})(jQuery);