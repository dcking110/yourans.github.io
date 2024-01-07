// 初始化数字显示为？
document.getElementById('randomNumber').textContent = '?';

document.getElementById('generateButton').addEventListener('click', function() {
    // 生成1到250的随机数字
    var randomNumber = Math.floor(Math.random() * 250) + 1;

    // 提取纯数字
    var numberText = randomNumber.toString();

    // 显示随机数字
    document.getElementById('randomNumber').textContent = numberText;

    // 隐藏按钮
    var button = document.getElementById('generateButton');
    button.style.display = 'none';

    // 显示提示文字
    var hint = document.createElement('p');
    hint.textContent = '请将此页面截图发给小书童哦';
    hint.style.color = 'black';
    // hint.style.fontFamily = 'PingFang SC', sans-serif;
    hint.style.fontSize = '18px';
    
	// 计算提示文字位置
    var centerPositionX = (window.innerWidth - hint.clientWidth) / 2;
    var centerPositionY = (window.innerHeight - hint.clientHeight) / 2;

    // 设置提示文字位置
    hint.style.position = 'fixed';
    hint.style.top = centerPositionY + 'px';
    hint.style.left = centerPositionX + 'px';
});
