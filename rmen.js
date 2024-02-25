let rcontainer = document.getElementById("products");

let menUrl = "https://json-server-moc.onrender.com/mensData";

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
  image.setAttribute("src", el.image_url);
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

let filterByCategory = document.getElementById("category");
filterByCategory.addEventListener("change", () => {
  fetchData(menUrl, `category=${filterByCategory.value}`);
});

let filterBySize = document.getElementById("sizes");
filterBySize.addEventListener("change", () => {
  fetchData(menUrl, `sizes=${filterBySize.value}`);
});

let filterByBrand = document.getElementById("brand");
filterByBrand.addEventListener("change", () => {
  fetchData(menUrl, `brand=${filterByBrand.value}`);
});

let filterByColor = document.getElementById("color");
filterByColor.addEventListener("change", () => {
  fetchData(menUrl, `color=${filterByColor.value}`);
});

let filterByDesign = document.getElementById("design");
filterByDesign.addEventListener("change", () => {
  fetchData(menUrl, `design=${filterByDesign.value}`);
});

let filterByFit = document.getElementById("fit");
filterByFit.addEventListener("change", () => {
  fetchData(menUrl, `fit=${filterByFit.value}`);
});

let filterBySleeve = document.getElementById("sleeve");
filterBySleeve.addEventListener("change", () => {
  fetchData(menUrl, `sleeve=${filterBySleeve.value}`);
});

let filterByNeck = document.getElementById("neck");
filterByNeck.addEventListener("change", () => {
  fetchData(menUrl, `neck=${filterByNeck.value}`);
});

let sortHighToLow = document.getElementById("highTolow");
sortHighToLow.addEventListener("click", () => {
  fetchData(menUrl, `_sort=price&_order=desc`);
});

let sortLowToHigh = document.getElementById("lowTohight");
sortLowToHigh.addEventListener("click", () => {
  fetchData(menUrl, `_sort=price&_order=asc`);
});

// footer
// let footerContent=document.getElementById("rfooter");
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

// navbar
