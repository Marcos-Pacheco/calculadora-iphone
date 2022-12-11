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
            switch (operacao) {
                case 'somar':
                    this.somar();
                    break;
                case 'subtrair':
                    this.subtrair();
                    break;
            
                default:
                    break;
            }
        },
        somar(){
            this.numeros.push(parseInt(this.resultado));
            let soma = 0;
            this.limpar_tela = true;
            if (this.numeros.length > 1) {
                soma = this.numeros[this.numeros.length - 1] + this.numeros[this.numeros.length - 2];
                this.resultado = String(soma);
                this.numeros.push(soma);
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
