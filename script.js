var userTableBody = document.getElementById("user-table-body");

//Array of strings
var sampleArray = ["Arun", "Kohila", "Govinthan", "Shiny"];

var sampleObject = {
  name: "Arun",
  age: "27",
  phone: "8610209596",
  city: "Tenkasi",
};

//Array of objects
var userArray = [
  {
    name: "Arun",
    gender: "Male",
    age: "27",
    phone: "8610209596",
    city: "Coimbatore",
  },
  {
    name: "Kohila",
    gender: "Female",
    age: "21",
    phone: "9150534008",
    city: "Coimbatore",
  },
  {
    gender: "Male",
    name: "Govinthan",
    age: "19",
    phone: "9150534040",
    city: "Hosur",
  },
  {
    name: "Shiny",
    age: "29",
    phone: "8610209595",
    city: "Chennai",
    gender: "Female",
  },
];

var userTableContent = "";
var i;

for (i = 0; i < userArray.length; i++) {
  var cityName = userArray[i]["city"];

  if (cityName[0] == "C") {
    cityName = cityName + "*";
  }

  userTableContent =
    userTableContent +
    `
    <tr>
      <td>${i + 1}</td>
      <td class="name-cell">${userArray[i]["name"]}</td>
      <td>${userArray[i]["age"]}</td>
      <td>${userArray[i]["gender"]}</td>
      <td>${userArray[i]["phone"]}</td>
      <td class="city-cell">${cityName}</td>
    </tr>
  `;
}
userTableBody.innerHTML = userTableContent;
