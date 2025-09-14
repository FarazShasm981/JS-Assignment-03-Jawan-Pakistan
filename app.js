// ! CHAPTER # 14-16

// Question # 01 Start
// var studentNames = [];
// Question # 01 End

// Question # 02 Start
// var studentNames = [{}];
// Question # 02 End

// Question # 03 Start
// var studentNames = ["Faraz","Saif Ali","Farooq"];
// Question # 03 End

// Question # 04 Start
// var num = [1,2,78,97,65];
// Question # 04 End

// Question # 05 Start
// var boolean = [true,false];
// Question # 05 End

// Question # 06 Start
// var mixedArray = ["Faraz",1998,true,{name:"faraz"}]
// Question # 06 End

// Question # 07 Start
// var PakQualification = [
    //   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];
// document.write(`<h2>Qualification In Pakistan</h2>(1)${PakQualification[0]}<br>(2)${PakQualification[1]}<br>(3)${PakQualification[2]}<br>(4)${PakQualification[3]}<br>(5)${PakQualification[4]}<br>(5)${PakQualification[5]}<br>(6)${PakQualification[6]}<br>(7)${PakQualification[7]}`)
// Question # 07 End

// Question # 08 Start
// var studNames = ["Michael","John","Tony"];
// var scores = [320,230,480];
// var totalMarks = 500;
//  document.write(`Score of ${studNames[0]} is ${scores[0]}. Percentage : ${scores[0]/500 *100}%<br>Score of ${studNames[1]} is ${scores[1]}. Percentage : ${scores[1]/500 *100}%<br>Score of ${studNames[2]} is ${scores[2]}. Percentage : ${scores[2]/500 *100}%`)
// Question # 08 End

// Question # 09 (a) Start
// var colorNames = ["red","green","yellow"];
// var user = prompt("color you want to add to the beginning");
// colorNames.unshift(user)
// document.write(`You were typed <b>${user}</b> Colour Name and here is a list of Colour Names <br><b>${colorNames.join(" ")}</b>`)
// Question # 09 (a) End

// Question # 09 (b) Start
// var colorNames = ["purple","orange","lightGray"];
// var userInp = prompt("Color you want to add to the end of the list");
// colorNames.push(userInp);
// document.write(`You were typed <b>${userInp}</b> Colour Name and here is a list of Colour Names <br><b>${colorNames.join(" ")}</b>`)
// Question # 09 (b) End

// Question # 09 (c) Start
// var colorNames = ["purple","orange","lightGray"];
// var userInp = prompt("Color you want to add to the end of the list");
// colorNames.push(userInp);
// document.write(`You were typed <b>${userInp}</b> Colour Name and here is a list of Colour Names <br>ColorNames List : <b>${colorNames.join(" ")}</b><br>`)
// colorNames.unshift("Cyan","Black")
// document.write(`Add two Color Names in the Beginning : <b>${colorNames.join(" ")}</b>`)
// Question # 09 (c) End

// Question # 09 (d) Start
// var colorNames = ["purple","orange","lightGray"];
// var userInp = prompt("Color you want to add to the end of the list");
// colorNames.push(userInp);
// document.write(`You were typed <b>${userInp}</b> Colour Name and here is a list of Colour Names <br>ColorNames List : <b>${colorNames.join(" ")}</b><br>`)
// colorNames.shift()
// document.write(`Delete first Color Name in the Beginning of the list: <b>${colorNames.join(" ")}</b>`)
// Question # 09 (d) End

// Question # 09 (e) Start
// var colorNames = ["purple","orange","lightGray"];
// var userInp = prompt("Color you want to add to the end of the list");
// colorNames.unshift(userInp);
// document.write(`You were typed <b>${userInp}</b> Colour Name and here is a list of Colour Names <br>ColorNames List : <b>${colorNames.join(" ")}</b><br>`)
// colorNames.pop()
// document.write(`Delete last Color Name in the list: <b>${colorNames.join(" ")}</b>`)
// Question # 09 (e) End

// Question # 09 (f) Start
// var colorNames = ["purple","Green","Blue","Red"];
// var userSel = parseInt(prompt("Which index you want to add a color name?\n(Only in Numbers)"));
// var user = prompt("Which Color you want to add?");
// colorNames.splice(userSel,0,user);
// document.write(`${user} Color at index ${userSel} <br> Here's the list of colors <b>${colorNames.join(" ")}</b>`)
// Question # 09 (f) End

// Question # 09 (g) Start
// var colorName = ["White","Black","Green","Red","Yellow","Blue","Orange"];
// document.write(colorName.join(" ")+ "<br>");
// var user = parseInt(prompt("On which index you want to delete the color?"));
// var userQuan = parseInt(prompt("how many colors you want to delete?")) 
// document.write(`you are deleted the color at index No. ${user} and you are deleted ${userQuan} color(s) <br> ${colorName.splice(user,userQuan)}<br> Now the color name list are ${colorName}`);
// Question # 09 (g) End

// Question # 10 Start
// var studScores = [320,230,480,120];
// document.write(`Student scores withou sort :${studScores}<br>Ordered Scores of Students ${studScores.sort()}`);
// Question # 10 End

// Question # 11 Start
// var citiesName = ["Karachi","Lahore","Islamabad","Rawalpindi","Quetta"];
// var selCities = citiesName.slice(2,4);
// document.write(`Cities name : ${citiesName} <br> Selected Cities Name : ${selCities}`);
// Question # 11 End

// Question # 12 Start
// var text = ["This","is","my","cat."];
// document.write(`Array : ${text} <br> ${text.join(" ")}`);
// Question # 12 End

// Question # 13 Start
// var gadgets = [];
// gadgets.push("Keyboard");
// gadgets.push("Mouse");
// gadgets.push("Printer");
// gadgets.push("Monitor");
// document.write(`<b>Gadgets Stored :</b> ${gadgets} <br>`)
// document.write(`<b>Gadgets in FIFO :</b> <br>${gadgets.shift()} <br> ${gadgets.shift()}<br>${gadgets.shift()}<br>${gadgets.shift()}`)
// Question # 13 End

// Question # 14 Start
// var gadgets = [];
// gadgets.push("Keyboard");
// gadgets.push("Mouse");
// gadgets.push("Printer");
// gadgets.push("Monitor");
// document.write(`<b>Gadgets Stored :</b> ${gadgets} <br>`)
// document.write(`<b>Gadgets in LIFO :</b> <br>${gadgets.pop()} <br> ${gadgets.pop()}<br>${gadgets.pop()}<br>${gadgets.pop()}`)
// Question # 14 End

// Question # 15 Start
// var phoneManuf = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write(`<select><option>${phoneManuf[0]}</option><option>${phoneManuf[1]}</option><option>${phoneManuf[2]}</option><option>${phoneManuf[3]}</option><option>${phoneManuf[4]}</option><option>${phoneManuf[5]}</option></select>`)
// Question # 15 End