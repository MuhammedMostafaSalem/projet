let tabs = document.querySelectorAll('.into-list li');
let tabsArray = Array.from(tabs);

let divs = document.querySelectorAll('.into-content > div');
let divsArray = Array.from(divs);


tabsArray.forEach(function(element) {
    element.addEventListener('click' , function(e) {
        tabsArray.forEach(function(element) {
            element.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach(function(div) {
            div.style.display = 'none';
        });
        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'block';
        // document.querySelector(e.currentTarget.dataset).style.display = 'block';
    });
});