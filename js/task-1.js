const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);



const categoriesArray = [...totalCategories]
.map(
    categories => console.log(`Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)
);

let liStyle = document.getElementById("list");
list.style.color = "#2E2F42";
list.style.fontFamily = "Montserrat";
list.style.fontSize = "16px";
list.style.fontStyle = "normal";
list.style.fontWeight = "400";
list.style.lineHeight = "1.5";
list.style.lineSpacing = "0.04em";

list.style.width = "360px";
list.style.height = "40px";

list.style.borderRadius = "4px";
list.style.border = "1px solid #808080";

list.style.paddingTop = "8px";
list.style.paddingLeft = "16px";

