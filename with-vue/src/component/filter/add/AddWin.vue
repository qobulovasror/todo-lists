<template>
    <!-- Modal -->
    <div class="modal" v-bind:class="[showAddWin ? 'd-block' : 'd-none',]" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false" >
        <div class="modal-dialog">
            <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add item</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeWin"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger" v-if="errorMsg" role="alert">{{ errorMsg }}</div>
                        <input type="text" v-model="name" name="name" placeholder="name" class="form-control mb-2">
                        <select class="form-select" v-model="status" name="status" aria-label="Default select example">
                            <option disabled value="" selected>Select item state</option>
                            <option value="progres">in Progress</option>
                            <option value="todo">Todo</option>
                            <option value="complete">Complate</option>
                            <option value="fail">Cancel</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeWin">Close</button>
                        <button type="button" class="btn btn-primary" @click="addItem">Add</button>
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
        showAddWin: {
            type: Boolean,
            required: true
        },
        closeWin: {
            type: Function,
            required: true
        }
    },
    data(){
        return {
            name: "",
            status: "",
            errorMsg: "",
        }
    },
    methods: {
        addItem(){
            if(this.name.length < 3 || !this.status){
                this.errorMsg="inputs are invalid :(";
                return;
            }else{
                this.errorMsg="";
                this.items.push({
                    name: this.name,
                    status: this.status,
                });
                console.log(`${this.name}- ${this.status}`);
                this.name = ""
                this.status = ""
                this.closeWin()
            }
        },
    }
}
</script>
<style></style>