const showData = document.getElementById("showData");
const dataDiv = document.getElementById("contenedor");
let validadores = {
  //Validación que permite solo números
  soloNumeros: function (valor) {
    if (valor != "") return /(^[0-9]*$)/.test(valor);
    else return true;
  },
  //Valida que solo permita texto
  soloTexto: function (valor) {
    return /^[A-Za-z\á\é\í\ó\ú\ü\Á\É\Í\Ó\Ú\Ü\'\s\xF1\xD1]+$/.test(valor);
  },
};
console.log(showData);
showData.addEventListener("click", async () => {
  fetch("http://localhost:3000/personas")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const dataHTML = document.createElement("ul");
      dataHTML.classList.add("list-group");
      data.forEach((item) => {
        console.log(item);
        const listItem = document.createElement("li");
        listItem.innerText = `${item.nombre} - ${item.cedula}`;
        listItem.classList.add("list-group-item");
        dataHTML.appendChild(listItem);
      });

      dataDiv.innerHTML = "";
      dataDiv.appendChild(dataHTML);
    })
    .catch((error) => {
      console.log("There was a problem with the fetch operation:", error);
    });
});
const form = document.querySelector("#formUser");

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const bodyData = {};

  for (const [key, value] of formData.entries()) {
    if (!value) {
      alert(`El campo ${key} está vacío`);
      return;
    }
    // Aplicar las validaciones
    switch (key) {
      case "cedula":
        if (!validadores.soloNumeros(value)) {
          alert(`El campo ${key} debe contener solo números`);
          return;
        }
        break;
      case "nombre":
        if (!validadores.soloTexto(value)) {
          alert(`El campo ${key} debe contener solo texto`);
          return;
        }
        break;
      case "telefono":
        if (!validadores.soloNumeros(value)) {
          alert(`El campo ${key} debe contener solo números`);
          return;
        }
        break;
      default:
        break;
    }
    bodyData[key] = value;
  }

  console.log(bodyData);

  const url = "http://localhost:3000/personas";
  const options = {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      alert(data.msg);
      console.log(data.msg);
    })
    .catch((error) => {
      console.log(error);
    });
};
form.addEventListener("submit", handleSubmit);
