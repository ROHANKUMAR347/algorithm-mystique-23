let rcontainer = document.getElementById("products");

let menUrl = "https://json-server-moc.onrender.com/womensData";

async function fetchData(menUrl, querrys = "") {
  try {
    let res = await fetch(`${menUrl}?${querrys}`);
    let data = await res.json();
    rcontainer.innerHTML = "";
    appendProducts(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData(menUrl);

function createProducts(el) {
  let box = document.createElement("div");
  box.setAttribute("class", "productbox");
  let image = document.createElement("img");
  image.setAttribute("src", el.image);
  box.append(image);
  let brand = document.createElement("p");
  brand.textContent = el.brand;
  let brand_description = document.createElement("p");
  brand_description.textContent = el.brand_description;
  brand_description.style.color = "grey";
  brand_description.style.fontSize = "smaller";
  let price = document.createElement("h3");
  price.setAttribute("class", "pricetext");
  price.textContent = el.price;
  let striked_off_price = document.createElement("p");
  striked_off_price.textContent = el.striked_off_price;
  striked_off_price.style.textDecoration = "line-through";
  let member_price = document.createElement("p");
  member_price.textContent = el.member_price;
  member_price.style.fontWeight = "bold";
  member_price.style.fontSize = "smaller";
  box.append(
    image,
    brand,
    brand_description,
    price,
    striked_off_price,
    member_price
  );
  return box;
}

function appendProducts(data) {
  data.forEach((el) => {
    let card = createProducts(el);
    rcontainer.append(card);
  });
}

let sortHighToLow = document.getElementById("highTolow");
sortHighToLow.addEventListener("click", () => {
  fetchData(menUrl, `_sort=price&_order=desc`);
});

let sortLowToHigh = document.getElementById("lowTohight");
sortLowToHigh.addEventListener("click", () => {
  fetchData(menUrl, `_sort=price&_order=asc`);
});

function loadFooter() {
  fetch("p_footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("rfooter").innerHTML = html;
    })
    .catch((error) => console.error("Error fetching footer:", error));
}

// Call the function when the page finishes loading
window.addEventListener("load", loadFooter);
