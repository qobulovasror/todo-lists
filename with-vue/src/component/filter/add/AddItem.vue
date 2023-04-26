<template>
    <!-- Button trigger modal -->
    <button 
        type="button" 
        class="btn btn-primary d-flex justify-content-end" 
        data-bs-toggle="modal" 
        data-bs-target="#staticBackdrop" 
        style="width: max-content"
        @click="showWin">
        Add item
    </button>
    <AddWin :items="items" :showAddWin="showAddWin" :closeWin="closeWin"/>
</template>

<script>
import AddWin from './AddWin.vue';
export default {
    components: {
        AddWin,
    },
    data(){
        return{
            showAddWin: false
        }
    },
    props: {
        items:{
            type: Array,
            required: true,
        }
    },
    methods: {
        showWin(){
            this.showAddWin = true
        },
        closeWin(){
            this.showAddWin = false
        }
    }
}
</script>

<style></style>