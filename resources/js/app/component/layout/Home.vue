

<template>
    <div>
        <datePicker @dateR="recupDate" />
        <modalAddPc @dataForParent="recupData" />
        <div v-for="ordi in listOrdi" :key="ordi.id">
            <div>
                <ordinateur :ordiname="ordi.nom" :dataAttribution="ordi" :selectedDate="date"/>
            </div>
        </div> 
    </div>
</template>

<script src="../js/home.js"> </script>
