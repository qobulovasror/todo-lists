<template>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form onsubmit="(event)=>addItem(event)">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add item</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" name="name" placeholder="name" class="form-control mb-2">
                        <select class="form-select" name="status" aria-label="Default select example">
                            <option selected>Select item state</option>
                            <option value="Progress">in Progress</option>
                            <option value="Todo">Todo</option>
                            <option value="Complate">Complate</option>
                            <option value="Fail">Fail</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </form>
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
        }
    },
    methods: {
        addItem(event){
            event.preventDefault();
            console.log(event);
        }
    }
}
</script>
<style></style>