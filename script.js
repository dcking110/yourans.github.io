// 初始化数字显示为？
document.getElementById('randomNumber').textContent = '?';

document.getElementById('generateButton').addEventListener('click', function() {
    // 生成1到250的随机数字
    var randomNumber = Math.floor(Math.random() * 250) + 1;

    // 提取纯数字
    var numberText = randomNumber.toString();

    // 显示随机数字
    document.getElementById('randomNumber').textContent = numberText;
});
