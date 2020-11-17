
import { post } from "lodash"

export default {
  props: {
    idPcM: {},
    selectedDateM: {},
    selectedTime: {},
    dialog: {}
  },  
  data(){
    return {
      loading: false,
        items: [],
        search: null,
        select: null,
        idClient: "",     
           
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    close() {
      this.$emit('update:dialog', false)
    },
    addAttribution(){
      alert("Attribution added")
      this.close()
    },
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      if(v.length >= 3){
        let data = { word: v}
        axios.post('api/clients', data)
        .then(response => {
          setTimeout(() => {
            this.items = response.data.data.map(data => {
              this.idClient = data.idClient
              return data.nom+ " "+ data.prenom
            })
            this.loading = false
          }, 500)
        })

      } 
    },
    formatClient(client){

    }
  }
}