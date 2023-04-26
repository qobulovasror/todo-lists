<template>
    <tr>
        <th scope="row">{{ index+1 }}</th>
        <td>{{ item.name }}</td>
        <td>
            <div class="status complete" v-if="item.status==='complete'">Complete</div>
            <div class="status progres" v-else-if="item.status==='progress'">in Progress</div>
            <div class="status todo" v-else-if="item.status==='todo'">todo</div>
            <div class="status fail" v-else="item.status==='fail'">cancel</div>
        </td>
        <td>
            <button type="button" class="btn btn-info">
                <i class="fa-solid fa-pen"></i>
            </button>
        </td>
        <td>
            <button type="button" class="btn btn-danger">
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
    border: 2px solid #00f; 
}
.status.todo {
    border: 2px solid #000; 
}
.status.progres {
    border: 2px solid #ff0; 
}
.status.fail {
    border: 2px solid #f00; 
}
</style>