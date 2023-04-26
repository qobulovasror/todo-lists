<template>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" class="col-5">Name</th>
                <th scope="col">Status</th>
                <th scope="col" class="col-1">Edit</th>
                <th scope="col" class="col-1">Remove</th>
            </tr>
        </thead>
        <tbody>
            <Item 
                v-for="(item, index) in items" 
                :item="item"
                :items="items"
                :index="index"
                />
        </tbody>
    </table>
</template>

<script>
import Item from "./Item.vue";
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        Item
    }
}
</script>

<style></style>