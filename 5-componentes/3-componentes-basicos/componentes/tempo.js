export default {
    name: "TempoHj",
    data() {
        return {
            temperaturaMaxima: 0,
        }
    },
    template: `<p>Rio de Janeiro, máxima de: {{temperaturaMaxima}}</p>`,
    methods: {
        PuxarTempo() {
            fetch("https://www.metaweather.com/api/location/455825/")
                .then(r => r.json())
                .then(r => {
                    this.temperaturaMaxima = r.consolidated_weather[0].max_temp.toFixed(2);
                })
        }
    },
    created() {
        this.PuxarTempo();
    }

}




