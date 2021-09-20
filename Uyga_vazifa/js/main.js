// // Kiritilgan raqamlarni qo'shish dastur

var numbers = prompt('Yig\'indisini hisoblanuvchi sonlarni kiriting:', '1 5 6 4 9 ko\'rinishda').split(' ');

function addNumbers(numbers) {

    var num = 0;

    for (var number of numbers) {
        num  += Number(number);
    }

    return num;
}

alert(addNumbers(numbers));

// Textni ichidan eng uzun so'zni topuvchi dastur

// HTML elementlarini tanlab olamiz
var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form__input');
var elResult = document.querySelector('.result');

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    // Input qiymatini o'zgaruvchiga olamiz
    var text = elInput.value.trim();

    // Input qiymatidagi so'zlarni array korinishga o'tkazamiz
    var textArr = text.split(' ');

    // Uzun so'zni tanlovchi funksiya yaratamiz
    function normalizeText(text) {
        // Uzun so'zni tanlab natija ko'rinishda chiqarishuvchi o'zgaruvchi yaratamiz
        var result = '';

        // Input qiymatini tozalab tashlaymiz
        elInput.value = null;

        // Uzun so'zni chiqaruvchi loop kodlarini yozamiz
        for (var word of textArr) {

            // Shartni qanotlantiruvchi natijani chiqaramiz
            if (word.length > result.length) {
                result = word;
            }

        }

        return result;
    }

    elResult.textContent = normalizeText(text); 
})