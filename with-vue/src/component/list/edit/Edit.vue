<template>
    <!-- Modal -->
    <div class="modal" :class="[editActive ? 'd-block': 'd-none']" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit item</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="setEditModal(false)"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" v-if="errorMsg" role="alert">{{ errorMsg }}</div>
                    <input type="text" v-model="name" name="name" placeholder="name" class="form-control mb-2">
                    <select class="form-select" v-model="status" name="status" aria-label="Default select example">
                        <option value="progres">in Progress</option>
                        <option value="todo">Todo</option>
                        <option value="complete">Complate</option>
                        <option value="fail">Cancel</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="setEditModal(false)">Close</button>
                    <button type="button" class="btn btn-primary" @click="setItem">Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        editActive: {
            type: Boolean,
            required: true
        },
        setEditModal: {
            type: Function,
            required: true
        },
        selectItem: {
            type: Object,
            required: true
        },
        selectIndex: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            name: "",
            status: "",
            errorMsg: ""
        }
    },
    updated() {
        if(this.name!="" && this.status!="") return
        if(this.selectItem){
            this.name = this.selectItem.name;
            this.status = this.selectItem.status;
        }
    },
    methods: {
        setItem(){
            if(this.name < 3 || !this.status){
                this.errorMsg = "inputs are invalid";
            } else{
                this.items[this.selectIndex] = {
                    name: this.name, 
                    status: this.status
                }
                this.name = ""
                this.status = ""
                this.setEditModal(false)
            }
        }
    }
}
</script>
<style></style>