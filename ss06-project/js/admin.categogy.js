// let category = [
//     {
//         id: 1,
//         name: "Màn hình máy tính",
//     },
//     {
//         id: 2,
//         name: "Điện thoại",
//     },
//     {
//         id: 3,
//         name: "Ốp điện thoại",
//     },
//     {
//         id: 4,
//         name: "Chuột",
//     },
//     {
//         id: 5,
//         name: "Lót chuột",
//     },
// ];
// //đẩy dữ liệu category lên
// localStorage.setItem("category", JSON.stringify(category));
//lấy dữ liệu category về
let categorys = JSON.parse(localStorage.getItem("category")) || [];

let categoryUpdate = null;

/* nút bấm về home */
let comeback = document.getElementsByClassName("topSonHeader")[0];
comeback.addEventListener("click", back);
function back() {
  window.location.href = "./admin.home.html";
}
//nút bấm về Shopee
const shopee = document.getElementsByClassName("shopee")[0];
shopee.addEventListener("click", load2);
function load2() {
  window.location.href = "../index.html";
}
function load() {
  let text = "";
  for (let i = 0; i < categorys.length; i++) {
    text += `
        <tr>
            <td>${i + 1}</td>
            <td>${categorys[i].name}</td>
            <td>${categorys[i].id}</td>
            <td class="editAll">
            <button onclick="editCategory(${
              categorys[i].id
            })" class="button">Sửa</button> 
            <button onclick="deleteCategory(${
              categorys[i].id
            })" class="button">Xóa</button></td>
        </tr>
        `;
  }
  document.getElementById("editProduct").innerHTML = text;
}
load();

function deleteCategory(id) {
  let check = confirm("Bạn có chắc chắn xóa sản phẩm này không?");
  if (check) {
    for (let i = 0; i < categorys.length; i++) {
      if (id == categorys[i].id) {
        categorys.splice(i, 1);
        localStorage.setItem("category", JSON.stringify(categorys));
        break;
      }
    }
  }
  load();
}

let inputCategory = document.getElementById("name-category");
// thêm danh mục
function addCategory() {
  document.getElementById("report2").style.display = "none";
  document.getElementById("report").style.display = "none";
  let flagCategory = 0;
  if (inputCategory.value == "") {
    document.getElementById("report").style.display = "block";
  } else if (inputCategory.value != "") {
    for (let i = 0; i < categorys.length; i++) {
      if (inputCategory.value == categorys[i].name) {
        flagCategory = 1;
      }
    }
    if (flagCategory == 0) {
      document.getElementById("report2").style.display = "none";
      document.getElementById("report").style.display = "none";
      let newCategory = {
        id: Math.floor(Math.random() * 100000000) + 1,
        name: inputCategory.value,
      };
      categorys.push(newCategory);
      localStorage.setItem("category", JSON.stringify(categorys));
      inputCategory.value = "";
    } else if ((flagCategory = 1)) {
      document.getElementById("report2").style.display = "block";
    }
  }
  load();
}

// sửa danh mục
let buttonCategory = document.getElementById("buttonCategory");
let h2Category = document.getElementById("h2Category");
function editCategory(id) {
  document.getElementById("report2").style.display = "none";
  document.getElementById("report").style.display = "none";
  for (let i = 0; i < categorys.length; i++) {
    if (categorys[i].id == id) {
      categoryUpdate = categorys[i];
      inputCategory.value = categorys[i].name;
      h2Category.innerHTML = "Sửa danh mục";
      document.getElementById("btnUpdateCategory").style.display =
        "inline-block";
      document.getElementById("buttonCategory").style.display = "none";
    }
  }
}

function updateCategory() {
  for (let i = 0; i < categorys.length; i++) {
    if (categorys[i].id == categoryUpdate.id) {
      categorys[i].name = inputCategory.value;
      localStorage.setItem("category", JSON.stringify(categorys));
      h2Category.innerHTML = "Thêm danh mục";
      inputCategory.value = "";
      document.getElementById("btnUpdateCategory").style.display = "none";
      document.getElementById("buttonCategory").style.display = "inline-block";
      load();
    }
  }
}
