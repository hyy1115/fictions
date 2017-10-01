// 获取浏览器窗口高度
export function getClientHeight() {
    if (window.innerHeight)
        var winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        var winHeight = document.body.clientHeight;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        var winHeight = document.documentElement.clientHeight;
    }
    return winHeight
}