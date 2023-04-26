<template>
    <tr
        v-if="filterHandler()"
        >
        <th scope="row">{{ index+1 }}</th>
        <td>{{ this.item.name }}</td>
        <td>
            <div class="status complete" v-if="this.item.status==='complete'">Complete</div>
            <div class="status progres" v-else-if="this.item.status==='progres'">in Progress</div>
            <div class="status todo" v-else-if="this.item.status==='todo'">todo</div>
            <div class="status fail" v-else="this.item.status==='fail'">cancel</div>
        </td>
        <td>
            <button type="button" class="btn btn-info" @click="this.setSelectedItem(this.item, this.index)">
                <i class="fa-solid fa-pen"></i>
            </button>
        </td>
        <td>
            <button type="button" class="btn btn-danger" @click="deleteItem(index)">
                <i class="fa fa-trash"></i>
            </button>
        </td>
    </tr>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        setSelectedItem: {
            type: Function,
            required: true
        },
        filter: {
            type: Object,
            required: true
        },
    },
    methods: {
        deleteItem(index){
            this.items.splice(index,1)
        },
        filterHandler(){
            if(this.filter.text=='' && this.filter.type==''){
                return true;
            }else if(this.filter.text!=''){
                if(this.filter.type==''){
                    return this.item.name.toLowerCase().indexOf(this.filter.text.toLowerCase()) > -1;
                }else{
                    return this.item.name.toLowerCase().indexOf(this.filter.text.toLowerCase()) > -1 && this.filter.type==this.item.status;
                }
            }else if(this.filter.text=='' && this.filter.type!=''){
                return this.filter.type==this.item.status;
            }
        }
    }
}
</script>

<style>
.status {
    width: max-content; 
    border-radius: 10px; 
    padding: 5px 10px;
}
.status.complete {
    border: 2px solid rgb(0, 255, 0); 
}
.status.todo {
    border: 2px solid #00f; 
}
.status.progres {
    border: 2px solid #ff0; 
}
.status.fail {
    border: 2px solid #f00; 
}
</style>