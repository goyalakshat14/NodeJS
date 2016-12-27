var Bucky={
	favFood : "chicken",
	favMovie : "sarfarosh"
}

var Person = Bucky;
Person.favMovie = "3Idiots";
console.log(Bucky.favMovie);