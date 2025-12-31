const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const questions = [
  {
    question: "Guess the word- ___ture?",
    options: ["A. Future", "B. Picture", "C. Lecture", "D. Capture"],
    answer: "B. Picture",
    hint: "It's Captured in a frame, it tells a thousand words."
  },
  {
    question: "Guess the word - p__nt?",
    options: ["A. Paint", "B. Plant", "C. Point", "D. Print"],
    answer: "A. Paint",
    hint: "You apply this to walls for color or art."
  },
  {
    question: "Guess the word - _ight?",
    options: ["A. Night", "B. Fight", "C. Light", "D. Sight"],
    answer: "C. Light",
    hint: "This helps you see in the dark."
  },
  {
    question: "Guess the word - p__r?",
    options: ["A. Pair", "B. Pear", "C. Pier", "D. Par"],
    answer: "B. Pear",
    hint: "This can be both a fruit and a match."
  },
  {
    question: "Guess the word - c__t?",
    options: ["A. Coat", "B. Cat", "C. Cart", "D. Curt"],
    answer: "A. Coat",
    hint: "You wear it over your clothes when it’s cold."
  },
  {
    question: "Guess the word - b__rd?",
    options: ["A. Board", "B. Beard", "C. Bird", "D. Bard"],
    answer: "B. Beard",
    hint: "A man may grow it, a bird may not."
  },
  {
    question: "Guess the word - s__e?",
    options: ["A. Show", "B. Shoe", "C. Sue", "D. Shoo"],
    answer: "B. Shoe",
    hint: "You wear this to protect your foot."
  },
  {
    question: "Guess the word - fl__r?",
    options: ["A. Flour", "B. Floor", "C. Flower", "D. Flier"],
    answer: "B. Floor",
    hint: "The surface you walk on."
  },
  {
    question: "Guess the word - wr__te?",
    options: ["A. Right", "B. Write", "C. Rite", "D. Wright"],
    answer: "B. Write",
    hint: "You do this with a pen or keyboard."
  },
  {
    question: "Guess the word - st__r?",
    options: ["A. Star", "B. Stair", "C. Stare", "D. Store"],
    answer: "B. Stair",
    hint: "You might climb this at home or see it in the sky."
  },
  {
    question: "Guess the word - br__k?",
    options: ["A. Break", "B. Brake", "C. Brook", "D. Bark"],
    answer: "A. Break",
    hint: "You might need this after hard work, or it might happen to glass."
  },
  {
    question: "Guess the word - w__k?",
    options: ["A. Wake", "B. Weak", "C. Walk", "D. Work"],
    answer: "C. Walk",
    hint: "You do this to go from place to place on foot."
  },
  {
    question: "Guess the word - s__n?",
    options: ["A. Son", "B. Sun", "C. Sin", "D. Soon"],
    answer: "B. Sun",
    hint: "It shines brightly in the day sky."
  },
  {
    question: "Guess the word - c__n?",
    options: ["A. Can", "B. Con", "C. Coin", "D. Kin"],
    answer: "A. Can",
    hint: "You might store soup in this metal container."
  },
  {
    question: "Guess the word - r__n?",
    options: ["A. Rein", "B. Rain", "C. Reign", "D. Ran"],
    answer: "B. Rain",
    hint: "This falls from the sky, but it’s not snow."
  },
  {
    question: "What is the capital of France?",
    options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
    answer: "C. Paris",
    hint: "It's known for the Eiffel Tower."
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A. Earth", "B. Mars", "C. Jupiter", "D. Venus"],
    answer: "B. Mars",
    hint: "Its surface is rich in iron oxide."
  },
  {
    question: "What is the largest ocean on Earth?",
    hint: "It covers about one-third of the surface of the Earth.",
    options: ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"],
    answer: "D. Pacific Ocean"
    },
    {
    question: "Who painted the Mona Lisa?",
    hint: "He was a Renaissance polymath.",
    options: ["A. Vincent van Gogh", "B. Pablo Picasso", "C. Leonardo da Vinci", "D. Claude Monet"],
    answer: "C. Leonardo da Vinci"
    },
    {
    question: "What is the chemical symbol for water?",
    hint: "It's composed of hydrogen and oxygen.",
    options: ["A. O2", "B. H2O", "C. CO2", "D. NaCl"],
    answer: "B. H2O"
    },
    {
    question: "Which country is famous for the Great Wall?",
    hint: "It's an ancient series of fortifications.",
    options: ["A. India", "B. Japan", "C. China", "D. Egypt"],
    answer: "C. China"
    },
    {
    question: "What is the fastest land animal?",
    hint: "It's known for its incredible speed over short distances.",
    options: ["A. Lion", "B. Cheetah", "C. Gazelle", "D. Horse"],
    answer: "B. Cheetah"
    },
    {
    question: "In which year did the first man walk on the moon?",
    hint: "Neil Armstrong was the first.",
    options: ["A. 1959", "B. 1969", "C. 1979", "D. 1989"],
    answer: "B. 1969"
    },
    {
    question: "What is the main component of Earth's atmosphere?",
    hint: "It makes up about 78% of the air we breathe.",
    options: ["A. Oxygen", "B. Carbon Dioxide", "C. Nitrogen", "D. Argon"],
    answer: "C. Nitrogen"
    },
];

let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 0;

const totalQuestions = questions.length;

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById("questionCount").innerText = `Question ${currentIndex + 1} of ${totalQuestions}`;
  document.getElementById("question").innerText = q.question;
  document.getElementById("hint").innerText = `Hint: ${q.hint}`;
  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";
  let progress = ((currentIndex) / totalQuestions) * 100;
  document.getElementById("progress-fill").style.width = `${progress}%`;


  q.options.forEach(opt => {
    const li = document.createElement("li");
    li.innerText = opt;
    li.onclick = () => checkAnswer(opt);
    optionsList.appendChild(li);
  });

  timeLeft = Math.floor(Math.random() * 11) + 10; // 10 to 20 sec
  document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
  timer = setInterval(countdown, 1000);
}

function countdown() {
  timeLeft--;
  document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
  if (timeLeft <= 5) {
  document.getElementById("timer").style.color = "red";
  } else {
  document.getElementById("timer").style.color = "black";
  }
  if (timeLeft <= 0) {
    clearInterval(timer);
    document.getElementById("result").innerText = "⏰ Time's up!";
    document.getElementById("next-btn").style.display = "inline-block";
  }
}

function checkAnswer(selected) {
  clearInterval(timer);
  const q = questions[currentIndex];
  if (selected === q.answer) {
    score++;
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText = `❌ Incorrect! The correct answer was: ${q.answer}`;
  }
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentIndex++;
  document.getElementById("result").innerText = "";
  document.getElementById("next-btn").style.display = "none";
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
  let percent = Math.round((score / questions.length) * 100);
  let message = "";
  if (percent === 100) {
    message = "🏆 Perfect score! Amazing job!";
  } else if (percent >= 70) {
    message = "👏 Great job!";
  } else if (percent >= 50) {
    message = "🙂 Not bad, keep practicing!";
  } else {
    message = "💡 Try again to improve!";
  }

  document.getElementById("question-box").innerHTML = `
    <h2>Game Over!</h2>
    <p>Your score: ${score}/${questions.length} (${percent}%)</p>
    <p>${message}</p>
  `;
  }
}

// Start game
showQuestion();
