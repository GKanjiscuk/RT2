import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// classe base
abstract class Operacao {
  abstract calcular(a: number, b: number): number;
}

//======================================================

class Soma extends Operacao {
  calcular(a: number, b: number): number {
    return a + b;
  }
}

class Subtracao extends Operacao {
  calcular(a: number, b: number): number {
    return a - b;
  }
}

class Multiplicacao extends Operacao {
  calcular(a: number, b: number): number {
    return a * b;
  }
}

class Divisao extends Operacao {
  calcular(a: number, b: number): number {
    if (b === 0) throw new Error("Divisão por zero não permitida!");
    return a / b;
  }
}

class Potenciacao extends Operacao {
  calcular(a: number, b: number): number {
    return Math.pow(a, b);
  }
}

class Radiciacao extends Operacao {
  calcular(a: number, b: number): number {
    if (a < 0 && b % 2 === 0)
      throw new Error("Raiz de número negativo inválida!");
    return Math.pow(a, 1 / b);
  }
}

//======================================================

class Bhaskara {
  calcular(a: number, b: number, c: number): string {
    let delta = b * b - 4 * a * c;
    if (delta < 0) return "Não há raízes reais";
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Raízes: x1 = ${x1}, x2 = ${x2}`;
  }
}

// função de entrada do usuario
function perguntar(query: string): Promise<string> {
  return new Promise((resolver) => rl.question(query, resolver));
}

const operacoes = {
  1: new Soma(),
  2: new Subtracao(),
  3: new Multiplicacao(),
  4: new Divisao(),
  5: new Potenciacao(),
  6: new Radiciacao(),
};

async function main() {
  console.log("Calculadora CLI - Escolha a operação:");
  console.log(
    "1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n5: Potenciação\n6: Radiciação\n7: Bhaskara"
  );

  let operacao = parseInt(await perguntar("Digite o número da operação: "));

  if (operacao >= 1 && operacao <= 6) {
    let a = parseFloat(await perguntar("Digite o primeiro número: "));
    let b = parseFloat(await perguntar("Digite o segundo número: "));
    try {
      console.log("Resultado:", operacoes[operacao].calcular(a, b));
    } catch (error) {
      console.error(error.message);
    }
  } else if (operacao === 7) {
    let coefA = parseFloat(await perguntar("Digite o coeficiente a: "));
    let coefB = parseFloat(await perguntar("Digite o coeficiente b: "));
    let coefC = parseFloat(await perguntar("Digite o coeficiente c: "));
    console.log(new Bhaskara().calcular(coefA, coefB, coefC));
  } else {
    console.log("Operação inválida!");
  }

  rl.close();
}

main();
