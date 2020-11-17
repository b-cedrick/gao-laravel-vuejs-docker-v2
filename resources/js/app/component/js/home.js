    
import ordinateur from "../layout/Ordinateur.vue"
import modalAddPc from "../layout/ModalAddPc.vue"
import datePicker from "../layout/DatePicker.vue"
import { get } from "lodash"

export default {
    components:{
        ordinateur,
        modalAddPc,
        datePicker
    },
    data() {
        return {
            listOrdi : [],
            date: ""
        }
    },
    mounted () {
        this.getListOrdis()
    },
    methods:{
        recupData(event){
            this.listOrdi.push(event)
        },
        getListOrdis(){
            this.listOrdi = []
            axios({
                methods: get,
                url: '/api/ordis',
                params: { date: this.date } 
            })
            //   .then(response => (this.info = response))      
            .then(response => {
                this.listOrdi = response.data.data.map(dat => {
                        // return {"id":dat.id, "nom":dat.nom}  
                        console.log("DATAAAAA : ",dat)
                        return dat 
                    })
            })
        },
        recupDate(date){
            this.date = date
            this.getListOrdis()
        }
    },
}