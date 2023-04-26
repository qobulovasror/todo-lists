<template>
    <div class="m-1 p-2 bg-primary-subtle d-flex flex-row justify-content-between">
        <AddItem :items="items"/>
        <div class="filter d-flex flex-row justify-content-end">
            <input type="search" class="form-control me-3" placeholder="Search item" style="width: 25%;" />
            <div class="d-flex flex-row">
                <input type="radio" class="btn-check " name="options-outlined" id="all" autocomplete="off" checked>
                <label class="btn btn-outline-primary ms-1" for="all">All</label>

                <input type="radio" class="btn-check " name="options-outlined" id="complete" autocomplete="off">
                <label class="btn btn-outline-primary ms-1" for="complete">Complete</label>

                <input type="radio" class="btn-check " name="options-outlined" id="in Progress" autocomplete="off">
                <label class="btn btn-outline-primary ms-1" for="in Progress">in Progress</label>
            </div>
        </div>
    </div>

    <EditVue/>
</template>

<script>
import AddItem from './add/AddItem.vue';
import EditVue from './edit/Edit.vue';
export default {
    components: {
        AddItem,
        EditVue
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style></style>