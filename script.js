document.getElementById('generateButton').addEventListener('click', function() {
    // 生成1到250的随机数字
    var randomNumber = Math.floor(Math.random() * 250) + 1;

    // 显示随机数字
    document.getElementById('randomNumber').textContent = 'Random Number: ' + randomNumber;
});
