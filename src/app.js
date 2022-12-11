const app = {
    data () {
        return {
            'numeros': [],
            'resultado': '0',
            'limpar_tela': true,
            'ultima_operacao' : '',
            'input': null,
            'temp': 0
        }
    },
    methods:{
        calcular(operacao){
            let resultado_operacao = 0;
            this.limpar_tela = true;

            if (operacao != 'igualar') {
                this.ultima_operacao = operacao;
                this.numeros.push(parseInt(this.resultado));
            }

            if (this.numeros.length > 1 || operacao == 'igualar') {
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
                    case 'igualar':
                        this.calcular(this.ultima_operacao);
                        return;

                }
                if (resultado_operacao < 0) {
                    this.resultado = String(Math.abs(resultado_operacao)) + '-';
                } else {
                    this.resultado = String(resultado_operacao);
                }
                this.numeros.push(resultado_operacao);
            }
        },
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
            this.resultado = '0';
            this.limpar_tela = true;
            this.ultima_operacao = '';
        }
    }
}

Vue.createApp(app).mount('#calculadora');
