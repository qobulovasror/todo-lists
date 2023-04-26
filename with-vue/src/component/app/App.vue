<script>
import Header from '../header/Header.vue';
import ItemList from '../list/ItemList.vue'
import Filter from '../filter/Filter.vue';

export default {
  components: {
    Header,
    ItemList,
    Filter
  },
  data(){
    return{
      items: [
        {
          name: "Dasturlash",
          status: "progress"
        },
        {
          name: "Ingilz tili",
          status: "todo"
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="card mt-5 p-4">
      <Header/>
      <Filter :items="items"/>
      <ItemList :items="items"/>
    </div>
  </div>
</template>

<style scoped></style>
