console.log("Hello, World");

var dcClass = [
	"Sean",
	"Drew",
	"Daniel",
	"Kyle",
	"Rishi",
	"Liz",
	"Anna",
	"Ryan",
	"Casey",
	"Connie",
	"Sarah",
	"Andy",
	"Michael",
	"Paul",
	"Mason"
];

console.log(dcClass[3]); //Expecting Kyle
dcClass.push("Rob");
dcClass.map((member, index)=>{
	console.log(member,index);
})