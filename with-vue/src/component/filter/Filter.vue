<template>
    <div class="m-1 p-2 bg-primary-subtle d-flex flex-row justify-content-between">
        <AddItem />
        <div class="filter">
            <input type="search" class="form-control" placeholder="Search item" style="width: 20%;" />
            <div class="d-flex flex-row">
                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
                <label class="btn btn-outline-primary" for="success-outlined">Checked success radio</label>

                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
                <label class="btn btn-outline-primary" for="danger-outlined">Danger radio</label>

                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
                <label class="btn btn-outline-primary" for="danger-outlined">Danger radio</label>
            </div>
        </div>
    </div>
</template>

<script>
import AddItem from './add/AddItem.vue';
export default {
    components: {
        AddItem
    }
}
</script>

<style></style>