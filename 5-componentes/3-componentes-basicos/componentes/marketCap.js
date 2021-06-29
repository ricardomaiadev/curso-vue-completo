import Money from "./money.js"



export default {
    name: "MarketCap",
    components: {
        Money
    },
    data() {
        return {
            ValorMercado: 0,
        }
    },
    template: `
    <div>
    <money></money>
    <p>Valor da Apple: {{ValorMercado}}</p>
    </div>
    `,
    methods: {
        puxarMoney() {
            fetch("https://api.origamid.dev/stock/aapl/quote")
                .then(r => r.json())
                .then(r => {
                    this.ValorMercado = r.marketCap;
                })
        }
    },
    created() {
        this.puxarMoney();
    }

}