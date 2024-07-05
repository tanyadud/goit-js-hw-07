'use sctrict';

const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

let categoriesAmount = 0;

categoryItems.forEach(item => {
    categoriesAmount +=1;

    const nameCategory = item.querySelector('h2').textContent;
    const subcategories = item.querySelectorAll('ul li');

console.log(`Category: ${nameCategory}
Elements: ${subcategories.length}`
);
});

console.log(`Number of categories: ${categoriesAmount}`);



