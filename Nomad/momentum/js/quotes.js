const quotes = [
    {
        quote: "Love is, above all else, the gift of oneself.",
        author: "Jean Anouilh",
    },
    {
        quote: "Life is either a daring adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "Words without actions are the assassins of idealism.",
        author: "Herbert Hoover",
    },
    {
        quote: "Self-confidence is the first requisite to great undertakings.",
        author: "Samuel Johnson",
    },
    {
        quote: "It's lack of faith that makes people afraid of meeting challenges, and I believe in myself.",
        author: "Muhammad Ali",
    },
    {
        quote: "The future is here. It's just not widely distributed yet.",
        author: "William Gibson",
    },
    {
        quote: "The wisest men follow their own direction.",
        author: "Euripides",
    },
    {
        quote: "Success is the ability to go from one failure to another with no loss of enthusiasm.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "Better a diamond with a flaw than a pebble without.",
        author: "Confucius",
    },
    {
        quote:"What makes the engine go? Desire, desire, desire.",
        author:"Stanley Kunitz",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;