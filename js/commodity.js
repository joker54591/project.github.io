
function filterItems(category) {
  const items = document.querySelectorAll('.product-item');

  items.forEach((item) => {
    const itemCategory = item.getAttribute('data-category');

    if (category === 'all' || category === itemCategory) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
const categoryButtons = document.querySelectorAll('.category-filter');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add active class to the clicked button
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    filterItems(category);
  });
});
filterItems('all');

const images = document.querySelectorAll('.img-fluid');

// 获取第一个图像的宽度和高度
const firstImage = images[0];
const width = firstImage.clientWidth;
const height = firstImage.clientHeight;

// 循环遍历所有图像，并设置宽度和高度
for (let i = 0; i < images.length; i++) {
  images[i].style.width = `${width}px`;
  images[i].style.height = `${height}px`;
}

var favoriteButton = document.querySelector('.favorite-button');

favoriteButton.addEventListener('click', function () {
  favoriteButton.classList.toggle('active');
});
var favoriteButton1 = document.querySelector('.favorite-button1');

favoriteButton1.addEventListener('click', function () {
  favoriteButton1.classList.toggle('active');
});
var favoriteButton2 = document.querySelector('.favorite-button2');

favoriteButton2.addEventListener('click', function () {
  favoriteButton2.classList.toggle('active');

});
var favoriteButton3 = document.querySelector('.favorite-button3');

favoriteButton3.addEventListener('click', function () {
  favoriteButton3.classList.toggle('active');

});

