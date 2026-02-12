export function deletarAlugueis (req, res){
  const idAluguelParaDeletar = Number(req.params.idAluguel);

  const alugueisIndex = alugueis.findIndex(
    (aluguel) => aluguel.idAluguel === idAluguelParaDeletar
  );

  if (alugueisIndex === -1) {
    return res.status(404).json({
      message: "Aluguel não encontrado com o id fornecido.",
    });
  }

  alugueis.splice(alugueisIndex, 1);


  res.status(200).send("Aluguel deletado com sucesso!");
};