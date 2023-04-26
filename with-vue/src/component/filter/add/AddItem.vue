<template>
    <!-- Button trigger modal -->
    <button 
        type="button" 
        class="btn btn-primary d-flex justify-content-end" 
        data-bs-toggle="modal" 
        data-bs-target="#staticBackdrop" 
        style="width: max-content">
        Add item
    </button>
    <AddWin :items="items"/>
</template>

<script>
import AddWin from './AddWin.vue';
export default {
    components: {
        AddWin,
    },
    props: {
        items:{
            type: Array,
            required: true,
        }
    }
}
</script>

<style></style>