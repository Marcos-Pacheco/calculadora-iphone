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
