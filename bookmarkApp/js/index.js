var siteNameInput = document.querySelector("#siteName");
var siteUrlInput = document.querySelector("#siteUrl");
var submitButton = document.querySelector(".container> section form button");
var formInputs = document.querySelectorAll(".container > section form input");
var tableTBody = document.querySelector("#sitesTBody");

var websitesList = [];

if (localStorage.getItem("websitesList") !== null) {
  websitesList = JSON.parse(localStorage.getItem("websitesList"));
  reDisplayData(websitesList);
}

function addSite() {
  var website = {
    name: siteNameInput.value,
    url: siteUrlInput.value,
  };
  if (formValidation()) {
    websitesList.push(website);

    localStorage.setItem("websitesList", JSON.stringify(websitesList));

    displayLastAddedSite();
    clearInputs();
  } else {
    Swal.fire({
      html: `
      <div class="sweetAlertTitle d-flex align-items- gap-2">
        <span class="rounded-circle"></span>
        <span class="rounded-circle"></span>
        <span class="rounded-circle"></span>
      </div>
      <div class="mt-5 text-left">
        <p class="fw-bold text-black">Site Name or Url is not valid, Please follow the rules below :</p>
        <div class="d-flex gap-2 align-items-center my-4">
          <div class="icon-box">
            <i class="fa-solid fa-right-long"></i>
          </div>
          <p class="m-0">Site name must be unique</p>
        </div>
        <div class="d-flex gap-2 align-items-center my-4">
          <div class="icon-box">
            <i class="fa-solid fa-right-long"></i>
          </div>
          <p class="m-0">Site URL must be unique</p>
        </div>
        <div class="d-flex gap-2 align-items-center my-4">
          <div class="icon-box">
            <i class="fa-solid fa-right-long"></i>
          </div>
          <p class="m-0">Site name must contain at least 3 characters</p>
        </div>
        <div class="d-flex gap-2 align-items-center">
          <div class="icon-box">
            <i class="fa-solid fa-right-long"></i>
          </div>
          <p class="m-0">Site URL must be a valid one</p>
        </div>
      </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
}

function deleteSite(index) {
  websitesList.splice(index, 1);
  localStorage.setItem("websitesList", JSON.stringify(websitesList));
  reDisplayData(websitesList);
}

function reDisplayData(dataList) {
  var tableRow = "";

  for (var i = 0; i < websitesList.length; i++) {
    tableRow += `
    <tr>
      <td>${i + 1}</td>
      <td class="text-capitalize">${dataList[i].name}</td>
      <td>
        <a href="${
          dataList[i].url.startsWith("http")
            ? dataList[i].url
            : "https://" + dataList[i].url
        }" target="_blank" class="d-flex align-items-center gap-1">
        <i class="fa-regular fa-eye"></i>Visit</a>
      </td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteSite(${i})">
          <i class="fa-regular fa-trash-can"></i> Delete
        </button>
      </td>
    </tr>`;
  }

  tableTBody.innerHTML = tableRow;
}

function displayLastAddedSite() {
  var tableRow = "";
  tableRow = `
    <tr>
      <td>${websitesList.length}</td>
      <td class="text-capitalize">${
        websitesList[websitesList.length - 1].name
      }</td>
      <td>
        <a href="${
          websitesList[websitesList.length - 1].url.startsWith("http")
            ? websitesList[websitesList.length - 1].url
            : "https://" + websitesList[websitesList.length - 1].url
        }" target="_blank" class="d-flex align-items-center gap-1">
        <i class="fa-regular fa-eye"></i>Visit</a>
      </td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteSite(${
          websitesList.length - 1
        })">
          <i class="fa-regular fa-trash-can"></i> Delete
        </button>
      </td>
    </tr>`;

  tableTBody.innerHTML += tableRow;
}

for (var i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("keyup", function () {
    siteValidation(this);
  });
}

function siteValidation(element) {
  var regex = {
    siteName: /^\S.{2,}$/,
    siteUrl: /^(https?:\/\/)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
  };

  if (regex[element.id].test(element.value) && isUnique()) {
    if (element.classList.contains("is-invalid")) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-valid");
    }
    return true;
  } else {
    if (element.classList.contains("is-valid")) {
      element.classList.remove("is-valid");
      element.classList.add("is-invalid");
    } else {
      element.classList.add("is-invalid");
    }
    return false;
  }
}

function clearInputs() {
  for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].value = "";
    if (formInputs[i].classList.contains("is-valid")) {
      formInputs[i].classList.remove("is-valid");
    }
  }
}

function formValidation() {
  if (siteValidation(siteNameInput) && siteValidation(siteUrlInput)) {
    return true;
  }
}

function isUnique() {
  var result = true;
  for (var i = 0; i < websitesList.length; i++) {
    if (
      siteNameInput.value.trim().toLowerCase() ===
        websitesList[i].name.trim().toLowerCase() ||
      siteUrlInput.value.trim().toLowerCase() ===
        websitesList[i].url.trim().toLowerCase()
    ) {
      result = false;
    }
  }

  return result;
}
