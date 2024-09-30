
const home = function() {

  const main = document.createElement("div");
  main.classList += "home";

  /* Headline */
  const headline = document.createElement("div");
  headline.classList += "headline"
  const headlineH1 = document.createElement("h1");
  const headlineP = document.createElement("p");
  headlineH1.textContent = "LOW-WIFI TEA SHOP";
  // headlineH1.textContent = "Low-Wifi Tea Shop";
  headlineP.textContent = "Made to be shared";
  
  main.appendChild(headline);
  headline.appendChild(headlineH1);
  headline.appendChild(headlineP);

  /* Order */
  const order = document.createElement("div");
  order.classList += "order";
  const delivery = document.createElement("div");
  delivery.classList += "delivery";
  const deliveryButton = document.createElement("button");
  deliveryButton.textContent = "Delivery";
  const takeaway = document.createElement("div");
  takeaway.classList += "takeaway";
  const takeawayButton = document.createElement("button");
  takeawayButton.textContent = "Take away";

  main.appendChild(order);
  order.appendChild(delivery);
  order.appendChild(takeaway);
  delivery.appendChild(deliveryButton);
  takeaway.appendChild(takeawayButton);

  /* Description */
  // const description = document.createElement("p");
  // description.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iusto quis, aliquam eligendi, aliquid iste molestiae est doloremque voluptatem dignissimos incidunt cum commodi magni veritatis obcaecati amet aperiam repellat saepe. Perferendis mollitia facere blanditiis harum eos dolore similique dolores natus laboriosam, repellendus deserunt distinctio porro illo modi iste eum consequatur quibusdam unde officia laborum illum odit reprehenderit fuga exercitationem! Ipsa."
  // main.appendChild(description);

  return main;
}


export default home;