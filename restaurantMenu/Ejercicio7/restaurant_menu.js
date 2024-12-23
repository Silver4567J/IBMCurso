const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastPrices = [27, 30, 20, 21];
const mainCoursePrices = [24, 27, 24, 30];
const dessertPrices = [28, 16, 12, 25];

function generateMenuHTML(menuItems, prices) {
    return menuItems
        .map((item, index) => `<p>Item ${index + 1}: ${item} - $${prices[index]}</p>`)
        .join('');
}

// Asignar contenido a los elementos HTML
const breakfastElement = document.getElementById('breakfastMenuItems');
const mainCourseElement = document.getElementById('maincourseMenuItems');
const dessertElement = document.getElementById('dessertMenuItems');

if (breakfastElement) {
    breakfastElement.innerHTML = generateMenuHTML(breakfastMenu, breakfastPrices);
}

if (mainCourseElement) {
    mainCourseElement.innerHTML = generateMenuHTML(mainCourseMenu, mainCoursePrices);
}

if (dessertElement) {
    dessertElement.innerHTML = generateMenuHTML(dessertMenu, dessertPrices);
}