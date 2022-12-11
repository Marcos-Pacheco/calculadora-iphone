const app = {
    data () {
        return {
            'numeros': [],
            'operacoes': [],
            'resultado': '0',
            'limpar_tela': true,
            'ultima_operacao' : '',
            'input': null,
            'temp': 0
        }
    },
    methods:{
        calcular(operacao){
            this.numeros.push(parseInt(this.resultado));
            let resultado_operacao = 0;
            this.limpar_tela = true;
            if (this.numeros.length > 1) {
                switch (operacao) {
                    case 'somar':
                        resultado_operacao = this.numeros[this.numeros.length - 2] + this.numeros[this.numeros.length - 1];
                        break;
                    case 'subtrair':
                        resultado_operacao = this.numeros[this.numeros.length - 2] - this.numeros[this.numeros.length - 1];
                        break;
                    case 'multiplicar':
                        resultado_operacao = this.numeros[this.numeros.length - 2] * this.numeros[this.numeros.length - 1];
                        break;
                    case 'dividir':
                        let n = this.numeros[this.numeros.length - 2] / this.numeros[this.numeros.length - 1];
                        resultado_operacao = Math.round(n * 100)/100;
                        break;
                }
                if (resultado_operacao < 0) {
                    this.resultado = String(Math.abs(resultado_operacao)) + '-';
                } else {
                    this.resultado = String(resultado_operacao);
                }
                this.numeros.push(resultado_operacao);
            }
        },
        // multiplicar(){
        //     this.numeros.push(parseInt(this.resultado));
        //     let multiplicacao = 0;
        //     this.limpar_tela = true;
        //     if (this.numeros.length > 1) {
        //         multiplicacao = 
                
        //     }
        // },
        // subtrair(){
        //     this.numeros.push(parseInt(this.resultado));
        //     let subtracao = 0;
        //     this.limpar_tela = true;
        //     if (this.numeros.length > 1) {
        //         subtracao = this.numeros[this.numeros.length - 2] - this.numeros[this.numeros.length - 1];
        //         if (subtracao < 0) {
        //             this.resultado = String(Math.abs(subtracao)) + '-';
        //         } else {
        //             this.resultado = String(subtracao);
        //         }
        //         this.numeros.push(subtracao);
        //     }
        // },
        botao(num){
            if (this.resultado.length < 9) {
                if (this.limpar_tela) {
                    this.resultado = '';
                    this.limpar_tela = false;
                }
                this.resultado += String(num);
            }
        },
        limpar(){
            this.numeros = [];
            this.operacoes = [];
            this.resultado = '0';
            this.limpar_tela = true;
            this.ultima_operacao = '';
            this.input = null;
            this.temp = 0;
        }
    }
}

Vue.createApp(app).mount('#calculadora');
