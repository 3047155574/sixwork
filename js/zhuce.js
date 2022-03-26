// var input = document.querySelector('input')
//     var imgs = document.getElementById('y1');
//     //下面是一个判断每次点击的效果
//     var flag = 0;
//     imgs.onclick = function () {
//       if (flag == 0) {
//         input.type = 'text';
//         flag = 1;
//       } else {
//         input.type = 'password';
//         flag = 0;
//       }
//     }
var input = document.querySelector('#m2')
var y1 = document.querySelector('.y1')
var flag = 0;
y1.onclick = function () {
    if (flag == 0) {
        input.type = 'text';
        flag = 1;
    } else {
        input.type = 'password';
        flag = 0;
        
    }
}