export default {
    name: "DolarHoje",
    data() {
        return {
            ValorDolar: '',
        }
    },
    template: `<p>Valor dolar/real: {{ValorDolar}}</p>`,
    methods: {
        PuxarDolar() {
            fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
                .then(r => r.json())
                .then(r => {
                    this.ValorDolar = r.USDBRL.high;
                })
        }
    },
    created() {
        this.PuxarDolar();
    }

}