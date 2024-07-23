// Activity 1
const book = {
    title: 'Mine Challenge',
    author: 'Me',
    year: 2024
}
console.log(book);

console.log(`author: ${book.author}, title: ${book.title}`);

// Activity 2
const getData = function () {
    console.log(`New author: ${this.author}, title: ${this.title}`);
}
book['func'] = getData;
book.func();

const updateYear = function (){
    this.year = 2025;
}
book['changeYear'] = updateYear;
book.changeYear();
console.log(book);


// Activity 3
const library = {
    Supernatural: {
        title: 'Supernatural',
        author: 'unknown',
        year: '2024'
    },
    mystery: {
        title: 'Ghost of Baskervillas',
        author: 'unkown',
        year: '2000'
    }
}
console.log(library);

for (const name in library) {
    console.log(name);
    let book = library[name];
    console.log(book.title);
}

// Activity 4
const getThisData = function () {
    console.log(`New year: ${this.year}, title: ${this.title}`);
}
book['func2'] = getThisData;
book.func2();


// Activity 5
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

console.log(Object.keys(book));
console.log(Object.values(book));