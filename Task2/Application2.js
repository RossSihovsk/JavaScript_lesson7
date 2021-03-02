function customFunction() {

    let elements = document.querySelectorAll("li>a");

    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].innerHTML.includes("http://internal.com") &
            (elements[i].innerHTML.includes("http://") || elements[i].innerHTML.includes("ftp://"))) {
            elements[i].classList.add("external-red");
        }
    }

    let Links = document.getElementsByClassName("external-red");

    for (let i = 0; i < externalLinks.length; i++) {
        Links[i].style.backgroundColor = "red";
    }
}