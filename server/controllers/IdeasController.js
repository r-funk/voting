export function listIdeas(req, res) {
  res.json({
    ideas: [
      { title: "Idee 1",
        detail: "Lorem ipsum dolor sit amet",
        author: "Mark Zuckerberg"},
      { title: "Idee 2",
        detail: "Lorem ipsum dolor sit amet",
        author: "Steve Jobs"},
      { title: "Idee 3",
        detail: "Lorem ipsum dolor sit amet",
        author: "Bill Gates"},
      { title: "Idee 4",
        detail: "Lorem ipsum dolor sit amet",
        author: "Dei Mudda"}
    ]
  });
}
