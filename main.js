const arr = [
  {
    author: " Stan Lee",
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "William W. Purkey",
    quote: "Be yourself everyone else is already taken.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Andre Gide, Autumn Leaves",
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
  },
];

function quote() {
  const random = Number.parseInt(Math.random() * arr.length);
  document.querySelector("#output").textContent = `\"${arr[random].quote}\"`;
  document.querySelector("#author").textContent = `--${arr[random].author}`;
}
