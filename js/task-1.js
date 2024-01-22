const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);
<<<<<<< HEAD
=======


>>>>>>> edbee8b3b2aae8300d60e25d2af5056a4a3c37cb

const categoriesArray = [...totalCategories]
  .map(
    categories => console.log(`Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)
  );