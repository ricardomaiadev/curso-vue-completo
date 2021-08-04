export default {
  data() {
    return {
      loading: true,
      api: null
    }
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
      .then( r => r.json())
      .then( r =>{
        setTimeout (() => {
          this.api = r;
          this.loading = false;
        }, 1500)
      });
    }
  }
}
  