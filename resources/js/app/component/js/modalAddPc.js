export default {
  data: () => ({
    dialog: false,
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Veuillez saisir le nom du PC',
      v => (v && v.length <= 20) || 'Nom doit être inférieur à 20 characters',
    ],
  }),
//   created() {
//     this.valid = false
//   },
  methods: {
    validate (event) {
        event.preventDefault();  
        let composant = this      
        this.$refs.form.validate()
        let data = { nom: this.name}
        axios.post('api/ordis/addpc', data)
        .then(function (response) {
            composant.$emit("dataForParent",response.data.data)
          console.log(response.data.data);
        })
        .catch(function (error) {
         console.log(error);
        });
        //   this.$refs.form.validate()
        this.dialog = false
    }
  },
}