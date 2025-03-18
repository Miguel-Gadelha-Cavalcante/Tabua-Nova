function status(request, response) {
  response.status(200).json({ Alunos: "são acima da média" });
}

export default status;
