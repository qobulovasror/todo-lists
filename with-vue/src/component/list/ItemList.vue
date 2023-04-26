<template>
    <Edit 
        :items="items"
        :editActive="editActive"
        :setEditModal="setEditModal"
        :selectItem="selectItem"
        :selectIndex="selectIndex"
        />
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
                :setSelectedItem="setSelectedItem"
                :filter="filter"
                />
        </tbody>
    </table>
</template>

<script>
import Item from "./Item.vue";
import Edit from "./edit/Edit.vue";
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        filter: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            editActive: false,
            selectItem: null,
            selectIndex: -1
        }
    },
    components: {
        Item,
        Edit
    },
    methods: {
        setEditModal(isActive){
            this.editActive = isActive
            if(!isActive){
                this.selectIndex = -1;
                this.selectItem = null
            }
        },
        setSelectedItem(item, index){
            this.selectItem = item
            this.selectIndex = index
            this.setEditModal(true)
            console.log(item);
        },
    }
}
</script>

<style></style>