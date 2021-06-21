(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "What does a pedometer count?",
      answers: {
        a: "Heart rate",
        b: "Steps",
        c: "Sheep",
      },
      correctAnswer: "b",
    },
    {
      question: "What is another name for an Academy Award?",
      answers: {
        a: "A Golden Globe",
        b: "An Oscar",
        c: "A Bafta",
      },
      correctAnswer: "b",
    },
    {
      question: "Who was John Lennon's second wife?",
      answers: {
        a: "Heather Mills",
        b: "Yoko Ono",
        c: "Barbara Bach",
      },
      correctAnswer: "b",
    },
    {
      question: "Who wrote the novel A Clockwork Orange",
      answers: {
        a: "Haper Lee",
        b: "George Orwell",
        c: "Anthony Burgess",
      },
      correctAnswer: "c",
    },
    {
      question: "Who is the manager of the Portuguese men's football team?",
      answers: {
        a: "Fernando Santos",
        b: "Cristiano Ronaldo",
        c: "Nuno Espirito Santo",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Andy Murray and which other tennis player have been given wildcard entries to Wimbledon this year?",
      answers: {
        a: "Dustin Brown",
        b: "Maria Sharapova",
        c: "Venus Williams",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Whose goalscoring record at European Championships did Cristiano Ronaldo break with his double against Hungary on Tuesday?",
      answers: {
        a: "Miroslav Klose",
        b: "Michel Platini",
        c: "Thierry Henry",
      },
      correctAnswer: "b",
    },
    {
      question: "History. Who was Henry VIII’s first wife?",
      answers: {
        a: "Catherine Parr",
        b: "Anne Boleyn",
        c: "Catherine of Aragon",
      },
      correctAnswer: "c",
    },
    {
      question:
        "How long did the 100 Years War last between England and France?",
      answers: {
        a: "106 years",
        b: "96 years",
        c: "116 years",
      },
      correctAnswer: "c",
    },
    {
      question: "Who was the USA at war with from 1950 to 1953?",
      answers: {
        a: "Vietnam",
        b: "North Korea",
        c: "Thailand",
      },
      correctAnswer: "b",
    },
    {
      question: "Who was the inventor of the telephone?",
      answers: {
        a: "Tim Berners-Lee",
        b: "Thomas Edison",
        c: "Alexander Graham Bell",
      },
      correctAnswer: "c",
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener("click", showResults);
})();
