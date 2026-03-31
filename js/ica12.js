let newBtn = document.querySelector('#js-new-quote');
newBtn.addEventListener('click', getQuote);

let answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', showAnswer);

const answerText = document.querySelector('#js-quote-text');

let current = {
    question: "",
    answer: ""
};

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();

        displayQuote(json.question);
        current.question = json.question;
        current.answer = json.answer;

    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    answerText.textContent = quote;
}

function showAnswer() {
    answerText.textContent = current.answer;
}

getQuote();
