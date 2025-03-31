"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
// Interface de entrada do usuário
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Classe base para operações
var Operacao = /** @class */ (function () {
    function Operacao() {
    }
    return Operacao;
}());
// Classes específicas para cada operação
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.calcular = function (a, b) {
        return a + b;
    };
    return Soma;
}(Operacao));
var Subtracao = /** @class */ (function (_super) {
    __extends(Subtracao, _super);
    function Subtracao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtracao.prototype.calcular = function (a, b) {
        return a - b;
    };
    return Subtracao;
}(Operacao));
var Multiplicacao = /** @class */ (function (_super) {
    __extends(Multiplicacao, _super);
    function Multiplicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplicacao.prototype.calcular = function (a, b) {
        return a * b;
    };
    return Multiplicacao;
}(Operacao));
var Divisao = /** @class */ (function (_super) {
    __extends(Divisao, _super);
    function Divisao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divisao.prototype.calcular = function (a, b) {
        if (b === 0)
            throw new Error("Divisão por zero não permitida!");
        return a / b;
    };
    return Divisao;
}(Operacao));
var Potenciacao = /** @class */ (function (_super) {
    __extends(Potenciacao, _super);
    function Potenciacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Potenciacao.prototype.calcular = function (a, b) {
        return Math.pow(a, b);
    };
    return Potenciacao;
}(Operacao));
var Radiciacao = /** @class */ (function (_super) {
    __extends(Radiciacao, _super);
    function Radiciacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radiciacao.prototype.calcular = function (a, b) {
        if (a < 0 && b % 2 === 0)
            throw new Error("Raiz de número negativo inválida!");
        return Math.pow(a, 1 / b);
    };
    return Radiciacao;
}(Operacao));
// Classe para resolver equações do segundo grau
var Bhaskara = /** @class */ (function () {
    function Bhaskara() {
    }
    Bhaskara.prototype.calcular = function (a, b, c) {
        var delta = b * b - 4 * a * c;
        if (delta < 0)
            return "Não há raízes reais";
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "Ra\u00EDzes: x1 = ".concat(x1, ", x2 = ").concat(x2);
    };
    return Bhaskara;
}());
// Função para capturar entrada do usuário
function perguntar(query) {
    return new Promise(function (resolve) { return rl.question(query, resolve); });
}
// Mapeamento de operações
var operacoes = {
    1: new Soma(),
    2: new Subtracao(),
    3: new Multiplicacao(),
    4: new Divisao(),
    5: new Potenciacao(),
    6: new Radiciacao()
};
// Função principal para execução da calculadora
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var operacao, _a, a, _b, b, _c, coefA, _d, coefB, _e, coefC, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    console.log("Calculadora CLI - Escolha a operação:");
                    console.log("1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n5: Potenciação\n6: Radiciação\n7: Bhaskara");
                    _a = parseInt;
                    return [4 /*yield*/, perguntar("Digite o número da operação: ")];
                case 1:
                    operacao = _a.apply(void 0, [_g.sent()]);
                    if (!(operacao >= 1 && operacao <= 6)) return [3 /*break*/, 4];
                    _b = parseFloat;
                    return [4 /*yield*/, perguntar("Digite o primeiro número: ")];
                case 2:
                    a = _b.apply(void 0, [_g.sent()]);
                    _c = parseFloat;
                    return [4 /*yield*/, perguntar("Digite o segundo número: ")];
                case 3:
                    b = _c.apply(void 0, [_g.sent()]);
                    try {
                        console.log("Resultado:", operacoes[operacao].calcular(a, b));
                    }
                    catch (error) {
                        console.error(error.message);
                    }
                    return [3 /*break*/, 9];
                case 4:
                    if (!(operacao === 7)) return [3 /*break*/, 8];
                    _d = parseFloat;
                    return [4 /*yield*/, perguntar("Digite o coeficiente a: ")];
                case 5:
                    coefA = _d.apply(void 0, [_g.sent()]);
                    _e = parseFloat;
                    return [4 /*yield*/, perguntar("Digite o coeficiente b: ")];
                case 6:
                    coefB = _e.apply(void 0, [_g.sent()]);
                    _f = parseFloat;
                    return [4 /*yield*/, perguntar("Digite o coeficiente c: ")];
                case 7:
                    coefC = _f.apply(void 0, [_g.sent()]);
                    console.log(new Bhaskara().calcular(coefA, coefB, coefC));
                    return [3 /*break*/, 9];
                case 8:
                    console.log("Operação inválida!");
                    _g.label = 9;
                case 9:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
