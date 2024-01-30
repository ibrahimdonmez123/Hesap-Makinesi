let result = document.getElementById('result');

// Sayı veya işlem operatörü ekleme fonksiyonu
function addNumber(number) {
    result.value += number;
}

function addOperator(operator) {
    if (result.value.slice(-1) !== operator) {
        result.value += operator;
    }
}

// Hesaplama fonksiyonu
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Hatalı İşlem!";
    }
}

// Temizleme fonksiyonu
function clearResult() {
    result.value = '';
}
