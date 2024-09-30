
const menu = function() {

  const main = document.createElement("div");
  main.classList += "menu";

  const header = document.createElement("h1");
  header.textContent = "Menu";

  const list = document.createElement("ul");

  const products = [
    ["black tea", "3.99"],
    ["green tea", "3.49"],
    ["infusion", "2.49"],
  ];

  products.forEach(product => {
    const item = document.createElement("li");
    const name = document.createElement("div");
    const price = document.createElement("div");

    item.style.display = "flex";
    item.style.justifyContent = "space-between";

    name.textContent = product[0];
    price.textContent = product[1] + "€";

    list.appendChild(item);
    item.appendChild(name);
    item.appendChild(price);
  });

  main.appendChild(header);
  main.appendChild(list);

  return main;
}


export default menu;