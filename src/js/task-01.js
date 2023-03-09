const listUl = document.querySelectorAll(".item");
console.log (`Number of categories: ${listUl.length}`);


listUl.forEach(function (listUlLi) {
    const firstListItem = listUlLi.firstElementChild;
    console.log(`Category: ${firstListItem.textContent}`);
    
    const lastListItem = listUlLi.lastElementChild.children;
    console.log (`Elements: ${lastListItem.length}`);
});