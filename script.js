var userTableBody = document.getElementById("user-table-body");

//primitive data types
var a = "Arun"; //string
var b = 27; //number
var c = null; //null
var d; //undefined
var isMajor = true; //boolean

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Array of strings
var sampleArray = ["Arun", "Kohila", "Govinthan", "Shiny"];

var sampleObject = {
  name: "Arun",
  age: "27",
  phone: "8610209596",
  city: "Tenkasi",
};

console.log(sampleObject);

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
    city: "Tenkasi",
  },
  {
    gender: "Male",
    name: "Govinthan",
    age: "19",
    phone: "9150534040",
    city: "Cuddalore",
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
  var x = 5 + 3;
  var doesStartWithC = cityName[0] == "C";
  var doesEndWithE = cityName[cityName.length - 1] == "e";

  if (doesStartWithC && doesEndWithE) {
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

var emptyDiv = document.getElementById("empty-div");
emptyDiv.innerHTML = "Kohila";
