function iframeResize(){
var PageHight = document.body.scrollHeight + 30; // �y�[�W�̍������擾
window.parent.document.getElementById('disp').style.height = PageHight + 'px'; // iframe�̍�����ύX
}
window.onload = iframeResize;