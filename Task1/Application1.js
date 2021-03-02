function customFunction() {
    let elements = document.querySelectorAll("li");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Добавляємо якийсь текст і цифру " + (i + 1);
    }

    let countOfItems = elements.length;
    window.alert(countOfItems  + " елементів списку отримали якесь значення");
}