class PedidoDTO{
    constructor(cliente, telefone, doce, bebida, preco){
        this.cliente = cliente;
        this.telefone = telefone;  
        this.doce = doce;          
        this.bebida = bebida;
        this.preco = preco;
    }

    validar(){
        if(!this.cliente){
            throw new Error("Nome obrigatório");
        }
        if(!this.doce){
            throw new Error("Doce obrigatório");
        }
        if(!this.telefone || this.telefone.length < 10){ 
            throw new Error("Telefone inválido (mínimo 10 dígitos)");
        }
        if(isNaN(this.preco) || this.preco <= 0){
            throw new Error("Preço inválido");
        }
        return true;
    }
}

let pedidos = [];

const precos = {
    "Brigadeiro": 8,
    "Bolo de Cenoura": 25,
    "Bolo de Laranja": 28,
    "Palha Italiana": 15,
    "Copo da Felicidade": 12,
    
    "Refrigerante Cola": 7,
    "Suco de Laranja": 6,
    "Água Mineral": 4
};

document.getElementById("doce").addEventListener("change", calcularPreco);
document.getElementById("bebida").addEventListener("change", calcularPreco);

function calcularPreco(){
    const doce = document.getElementById("doce").value;
    const bebida = document.getElementById("bebida").value;

    let precoTotal = 0;
    if(doce) precoTotal += precos[doce] || 0;
    if(bebida) precoTotal += precos[bebida] || 0;

    document.getElementById("preco").value = precoTotal > 0 ? precoTotal : "";
}