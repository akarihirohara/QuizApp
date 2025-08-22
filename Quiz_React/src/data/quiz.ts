interface quiz {
  question: string;
  options: string[],
  answerIndex: number
}
const quizData: quiz[] = [
  {
    question: "Which scientist proposed the three laws of planetary motion?",
    options: ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Nicolaus Copernicus"],
    answerIndex: 1, // Johannes Kepler
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answerIndex: 1, // Ottawa
  },
  {
    question: "In literature, who wrote 'Paradise Lost'?",
    options: ["John Milton", "William Shakespeare", "Geoffrey Chaucer", "Homer"],
    answerIndex: 0, // John Milton
  },
  {
    question: "Which metal was historically called 'quicksilver'?",
    options: ["Mercury", "Silver", "Lead", "Tin"],
    answerIndex: 0, // Mercury
  },
  {
    question: "Machu Picchu, the famous Incan citadel, is located in which country?",
    options: ["Chile", "Peru", "Bolivia", "Ecuador"],
    answerIndex: 1, // Peru
  },
]

export default quizData

/*{
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne",  "Brisbane", "Canberra"],
    answerIndex: 3, // Canberra
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answerIndex: 1, // Mars
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2, // 7
  },
  {
    question: "Which animal is the largest mammal in the world?",
    options: ["Blue Whale", "African Elephant", "Giraffe", "Polar Bear"],
    answerIndex: 0, // Blue Whale
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answerIndex: 2, // 2
  },*/