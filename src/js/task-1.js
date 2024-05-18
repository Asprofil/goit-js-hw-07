const listCount = document.querySelector(`#categories`);
const listItems = listCount.querySelectorAll(`.item`);
console.log("Number of categories:" + listItems.length);
listItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('ul li');



console.log("Category:" + categoryTitle);

console.log("Element:" + categoryElements.length);
});