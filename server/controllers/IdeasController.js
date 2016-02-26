export function listIdeas(req, res) {
  res.json({
    ideas: [
      { title: "Idee 1"},
      { title: "Idee 2"},
      { title: "Idee 3"},
      { title: "Idee 4"}
    ]
  });
}
