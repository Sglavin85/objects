const angus = {
    age: 1
}

const tess = {
    age: 1
}

const food = {
    type: "Hamburger ",
    size: "small",
    temperature: "Medium Rare"
}

const desk = {
    height: 42,
    width: 63,
    depth: 30
}

const whiskers = {
    species: "Cat",
    name: "Whiskers",
    age: 4,
    color: "Black"
}

const dozer = {
    species: "Dog",
}


// Lightning Round 1
const mustang = {
    make: "Ford",
    model: "Mustang",
    color: "red",
    year: 2015
}

// Lightning Round 2
const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts"]

// Lightning Round 3
const allFamily = [
    {
        name: "sean",
        Gender: "male",
        age: 33,
        height: 72,
        weight: 200
    },
    

    {   
        name: "Chris",
        Gender: "male",
        age: "75",
        height: 75,
        weight: 205
    },

    {
        name: "Stacy",
        Gender: "female",
        age: 73,
        height: 67,
        weight: 121
    },

    {
        name: "Matt",
        Gender: "male",
        age: 65,
        height: 76,
        weight: 200
    }

]


// Lightning dot notation

const wardrobe = 
    {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log(`The wardrobe is made by ${wardrobe.manufacturer}.`);
console.log(`The wardrobe's dimentions are ${wardrobe.height} x ${wardrobe.depth} x ${wardrobe.width}`);
console.log(`The contents of the wardrobe are ${wardrobe.contents[0]}, ${wardrobe.contents[1]}, ${wardrobe.contents[2]}, ${wardrobe.contents[3]}`)

// dot and square bracket notation

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The dimensions of the empire state building are ${empireStateBuilding.height} x ${empireStateBuilding.eastWestLength} x ${empireStateBuilding.northSouthLength}`);

let key1 = "stories";
let key2 = "address";
let key3 = "squareFeet";
let key4 = "constructionDate";
let key5 = "cost";
let key6 = "owner";
let key7 = "architect";

console.log(`The Empire State Building has ${empireStateBuilding[key1]} stories`);
console.log(`The address for the Empire State Building is ${empireStateBuilding[key2]}`);
console.log(`The square footage of the Empire State Building is ${empireStateBuilding[key3]}`);
console.log(`The Empire State Building opened in ${empireStateBuilding[key4]}`);
console.log(`The Empire State building cost $${empireStateBuilding[key5]} to build`);
console.log(`The owner of the Empire State Building is ${empireStateBuilding[key6]}`);
console.log(`The architect of the Empire State Building was ${empireStateBuilding[key7]}`);

// for loop query into object

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const partTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

for (let i =0; i < partTimeInstructors.length; i++) {
    console.log(partTimeInstructors[i]);
}

const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;

for (let i=0; i < fullTimeInstructors.length; i++) {
    console.log(fullTimeInstructors[i]);
}

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

// accessubg property values practice

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed to the ${beatles.albums[3]} Album`);

