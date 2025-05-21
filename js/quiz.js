  if (localStorage.getItem('logado') !== 'true') {
    window.location.href = '../public/Entrar.html';
  }

const quizData = [
  {
    question: "Qual a data do nosso primeiro beijo?",
    options: ["03/11/2022", "12/10/2022", "02/12/2022", "29/10/2022"],
    correct: 3
  },
  {
    question: "Qual foi a primeira série que assistimos juntinhos?",
    options: ["Stranger Things", "How I Met Your Mother", "Brooklyn Nine-Nine", "The Office"],
    correct: 3
  },
  {
    question: "Onde foi nosso primeiro beijo?",
    options: ["No cinema", "No ponto de ônibus", "Na sua casa", "Na frente da escola"],
    correct: 2
  },
  {
    question: "Onde a gente estava na nossa primeira foto juntos?",
    options: ["Na praça da moça", "No shopping", "Na sua casa", "Na escola"],
    correct: 3
  },
  {
    question: "Qual dessas manias minhas você já imitou sem perceber?",
    options: ["Imitações aleatórias", "Frases de efeito", "Manias e gracinhas", "Todax 🧙"],
    correct: 3
  },
  {
    question: "Qual foi o primeiro 'eu te amo' — quem falou e quando?",
    options: [
      "Eu – 12/11/2022",
      "Você – 29/12/2022",
      "Eu – 29/10/2022",
      "Você – 01/01/2023"
    ],
    correct: 2
  },
  {
    question: "Em que mês a gente começou a conversar todo dia sem parar?",
    options: ["Setembro", "Novembro", "Outubro", "Dezembro"],
    correct: 2
  },
{
  question: "Qual a primeira cantada que você me mandou?",
  options: ["Você é Wi-Fi? Porque sinto uma conexão forte entre nós.", "Você é feita de cobre e telúrio? Porque você é Cu-Te.", "🧶", "Seu nome é Google? Porque tem tudo o que eu procuro."
  ],
  correct: 2
},
{
  question: "Qual foi o primeiro apelido que você me deu?",
  options: ["Tio Gui", "guigui", "gui", "gatinho"],
  correct: 0
},
{
  question: "Qual foi o primeiro filme que assistimos juntos?",
  options: ["Homem aranha no aranha verso", "Shazam", "Adão Negro", "Pantera Negra"],
  correct: 2
}
];

const form = document.getElementById("quiz-form");
const result = document.getElementById("result");

quizData.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `${index + 1}. ${q.question}`;

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");

  q.options.forEach((option, i) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = i;
    const span = document.createElement("span");
    span.textContent = option;
    label.appendChild(input);
    label.appendChild(span);
    optionsDiv.appendChild(label);
  });

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(optionsDiv);
  form.appendChild(questionDiv);
});

document.getElementById("submit-btn").addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) {
      score++;
    }
  });
  result.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas! 💖<br>Manda um print pra mim saber quantas foram.`;
});
