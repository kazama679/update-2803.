const shopee = document.getElementsByClassName("shopee")[0];
//lấy dữ liệu sang
let button = document.getElementById("addCustomer");
let editCustomer = document.getElementById("editCustomer");
let h2Edit = document.getElementById("h2Edit");
let h2Add = document.getElementById("h2Add");

let nameProduct = document.getElementById("nameProduct");
let image = document.getElementById("image");
let content = document.getElementById("content");
let priceProduct = document.getElementById("priceProduct");
let numberStock = document.getElementById("numberStock");
let select = document.getElementById("select");

// Gán sự kiện click cho thẻ div
shopee.addEventListener("click", load);
function load() {
  window.location.href = "../index.html";
}

//lấy dữ liệu về
let products = JSON.parse(localStorage.getItem("products"));

function load2() {
  editCustomer.style.display = "none";
  button.style.display = "block";
  h2Edit.style.display = "none";
  h2Add.style.display = "block";
  let text = "";
  for (let i = 0; i < products.length; i++) {
    text += `
        <tr>
            <td>${i + 1}</td>
            <td>${products[i].name}</td>
            <td class="td"><img src=".${
              products[i].image
            }" alt="" width="150px"></td>
            <td>${products[i].price}</td>
            <td>${products[i].stock}</td>
            <td>${products[i].category}</td>
            <td class="editAll">
            <button onclick="update2(${
              products[i].id
            })" class="button">Chỉnh sửa</button>
            <button onclick="delete2(${
              products[i].id
            })" class="button">Xóa</button>
            </td>
        </tr>
        `;
  }
  document.getElementById("ADMproduct").innerHTML = text;
}

//nút xóa sản phẩm
function delete2(id) {
  let check = confirm("Xóa sản phẩm");
  if (check) {
    for (let i = 0; i < products.length; i++) {
      if (id == products[i].id) {
        products.splice(products[i], 1);
        localStorage.setItem("products", JSON.stringify(products));
        load2();
      }
    }
  }
}
load2();

/* nút bấm về home */
let comeback = document.getElementsByClassName("topSonHeader")[0];
comeback.addEventListener("click", back);
function back() {
  window.location.href = "./admin.home.html";
}

//lấy dữ liệu về
let category = JSON.parse(localStorage.getItem("category"));
for (let i = 0; i < category.length; i++) {
  document.getElementById("select").innerHTML += `
        <option>${category[i].name}</option>
    `;
}

// thêm sản phẩm
button.onclick = function () {
  let newProduct = {
    image: image.value,
    id: Math.floor(Math.random() * 100000000) + 1,
    name: nameProduct.value,
    price: +priceProduct.value,
    stock: +numberStock.value,
    category: select.value,
    content: content.value,
  };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  load2();
};

// chỉnh sửa sản phẩm
function update2(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      (image.value = products[i].image),
        (nameProduct.value = products[i].name),
        (priceProduct.value = products[i].price),
        (numberStock.value = products[i].stock),
        (select.value = products[i].category),
        (content.value = products[i].content);
      addCustomer;
      editCustomer.style.display = "block";
      button.style.display = "none";
      h2Edit.style.display = "block";
      h2Add.style.display = "none";
      return;
    }
  }
}
editCustomer.onclick = function () {
  console.log(1);
};
