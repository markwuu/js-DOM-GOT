/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark

Please also use CSS to style up your work 

*/

var kingdoms = [

	{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", house: "House Arryn",region: "The Vale of Arryn",lord: "Robin Arryn", allegiance: "House Stark", words: "As High As Honor"},

	{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister", words: "We Stand Together"},

	{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign", words: "We Do Not Sow"},

	{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Targaryen", words: "Hear Me Roar!"}, 

	{ crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign", words: "Winter Is Coming"},

	{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign", words: "Fire And Blood"}

	];

var title = document.createElement('div');
title.id = "title";
title.innerHTML = "Game of Thrones";
document.body.appendChild(title);


var box = document.createElement('div');
box.className = "box";
document.body.appendChild(box);

for(var i = 0; i < kingdoms.length; i++){

	var separateHouses = document.createElement('div');
	separateHouses.className = "differentHouse";
	box.appendChild(separateHouses);

	var crest = document.createElement('img');
	crest.className = "picture";
	crest.src = kingdoms[i].crest;
	separateHouses.appendChild(crest);

	var house = document.createElement('div');
	house.className = "house";
	house.innerHTML = kingdoms[i].house;
	separateHouses.appendChild(house);

	var region = document.createElement('div');
	region.className = "region";
	region.innerHTML = kingdoms[i].region;
	separateHouses.appendChild(region);

	var lord = document.createElement('div');
	lord.className = "lord";
	lord.innerHTML = kingdoms[i].lord;
	separateHouses.appendChild(lord);

	var allegiance = document.createElement('div');
	allegiance.className = "allegiance";
	allegiance.innerHTML = kingdoms[i].allegiance;
	separateHouses.appendChild(allegiance);

	var words = document.createElement('div');
	words.className = "words";
	words.innerHTML = kingdoms[i].words;
	separateHouses.appendChild(words);
}


var showWords = document.getElementsByClassName("differentHouse");
for(var i = 0; i < showWords.length; i++){
	showWords[i].addEventListener("click", showHidden);
}

function showHidden(){
	var show = this.querySelectorAll(".words")[0];
	if(show.style.display === "none"){
		show.style.display = "block";
	}else{
		show.style.display = "none";
	}
}

for(var i = 0; i < showWords.length; i++){
	showWords[i].addEventListener("click", showAllegiance);
}

function showAllegiance(){
	var show = this.querySelectorAll(".allegiance")[0];
	if(show.style.display === "block"){
		show.style.display = "none";
	}else{
		show.style.display = "block";
	}
}

for(var i = 0; i < showWords.length; i++){
	showWords[i].addEventListener("click", showLord);
}

function showLord(){
	var show = this.querySelectorAll(".lord")[0];
	if(show.style.display === "block"){
		show.style.display = "none";
	}else{
		show.style.display = "block";
	}
}

for(var i = 0; i < showWords.length; i++){
	showWords[i].addEventListener("click", showRegion);
}

function showRegion(){
	var show = this.querySelectorAll(".region")[0];
	if(show.style.display === "block"){
		show.style.display = "none";
	}else{
		show.style.display = "block";
	}
}

for(var i = 0; i < showWords.length; i++){
	showWords[i].addEventListener("click", showHouse);
}

function showHouse(){
	var show = this.querySelectorAll(".house")[0];
	if(show.style.display === "block"){
		show.style.display = "none";
	}else{
		show.style.display = "block";
	}
}

















