const shopee = document.getElementsByClassName("shopee")[0];

// Gán sự kiện click cho thẻ div
shopee.addEventListener("click", load);
function load() {
  window.location.href = "../index.html";
}

//lấy dữ liệu về
function renderAdminUser() {
  let userADM = JSON.parse(localStorage.getItem("users")) || [];
  let userHTMl = "";
  for (let i = 0; i < userADM.length; i++) {
    userHTMl += `
        <tr>
            <td>${i + 1}</td>
            <td>${userADM[i].userName}</td>
            <td>${userADM[i].userId}</td>
            <td>${userADM[i].email}</td>
            <td>${userADM[i].address}</td>
            <td class="Tdbutton"><button class="button blockUser" onclick="blockUser(${
              userADM[i].userId
            })">${userADM[i].status ? "Chặn" : "Bỏ chặn"}</button></td>
        </tr>
    `;
    document.getElementById("ADMuser").innerHTML = userHTMl;
  }
}
renderAdminUser();

/* nút bấm về home */
let comeback = document.getElementsByClassName("topSonHeader")[0];
comeback.addEventListener("click", back);
function back() {
  window.location.href = "./admin.home.html";
}

// chặn người dùng
// let change = document.getElementsByClassName("blockUser")[0];

function blockUser(id) {
  let login = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < login.length; i++) {
    if (login[i].userId == id) {
      login[i].status = !login[i].status;
      break;
    }
  }
  localStorage.setItem("users", JSON.stringify(login));
  renderAdminUser();
}
