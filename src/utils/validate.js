// 过滤特殊字符
export function striptScript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs
}
// 验证邮箱格式
export function validateEmail(value) {
    let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$/;
    return !reg.test(value);
}

// 验证密码格式
export function validatePass(value) {
    let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/;
    return !reg.test(value);
}

// 验证手机格式
export function validateMobile(value) {
    let reg = /[1][3,4,5,6,7,8][0-9]{9}$/;
    return !reg.test(value);
}