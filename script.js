const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59063,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

const book = getBook(5);

// const title = book.title;
// const authour = book.author;
const {
  title,
  author,
  id,
  genres,
  pages,
  moviepublicationDate,
  publicationDate,
  hasMovieAdaptation,
} = book;

// const firstGenre = genres[0];
// const secondGenre = genres[1];
const [firstGenre, secondGenre, ...otherGenres] = genres;

const newGenre = ["epic_fantasy", ...genres];
newGenre;

const updatedBook = {
  ...book,
  //adding new property
  moviepublicationDate: "2021-12-25",
  //overwriting an existing property
  pages: 2022,
};
updatedBook;

//Arrow Functions
// function getYear(str) {
//   return str.split("-")[0];
// }
const getYear = (str) => str.split("-")[0];
getYear;

//Template Literals
const summary = `${title} is ${pages} pages book. Written by authour ${author} in the year ${getYear(
  publicationDate
)}`;
summary;

//Ternary operator
const pageRange = pages > 1000 ? "over a thousand" : "less than one thousand";
pageRange;
console.log(`Book ranges ${pageRange} of pages`);

//Short-Circuiting And Logical Operators: &&, ||, ??
console.log(true && "string something");
console.log(false && "string something");
console.log(hasMovieAdaptation && "this book is a movie");

//falsy values : 0, null, '' empty string, undefined
console.log(0 && "nikhil");
console.log("" || "");
console.log(book.translations.spanish);
const spanishTranslations = book.translations.spanish || "Not translated";
spanishTranslations;
const wrongCount = book.reviews.librarything.reviewsCount || "No Data";
wrongCount;

// short circuit falsey values :: nullish coalescing operator ??
const rightCount = book.reviews.librarything.reviewsCount ?? "No Data";
rightCount;

//OPTIONAL CHAINING ? + nullish coalescing operator ??
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));