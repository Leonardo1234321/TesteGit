// Classe base
class Veiculo {
    mover(): void {
      console.log("O veículo está em movimento");
    }
  }
  
  // Subclasse Carro
  class Carro extends Veiculo {
    mover(): void {
      console.log("O carro está em movimento");
    }
  }
  
  // Subclasse Bicicleta
  class Bicicleta extends Veiculo {
    mover(): void {
      console.log("A bicicleta está em movimento");
    }
  }
  
  // Função que recebe um array de Veiculos e chama o método mover()
  function moverVeiculos(veiculos: Veiculo[]): void {
    for (const veiculo of veiculos) {
      veiculo.mover();
    }
  }
  
  // Teste com instâncias de Carro e Bicicleta
  const veiculos: Veiculo[] = [new Carro(), new Bicicleta()];
  
  moverVeiculos(veiculos);