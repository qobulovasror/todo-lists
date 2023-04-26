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
          status: "progres"
        },
        {
          name: "Ingilz tili",
          status: "todo"
        },
      ],
      filter: {
        text: "",
        type: ""
      }
    }
  },
  methods: {
    setFilter(text, type){
      this.filter = {
        text, type
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="card mt-5 p-4">
      <Header/>
      <Filter :items="items" :filter="filter"/>
      <ItemList :items="items" :filter="filter"/>
    </div>
  </div>
</template>

<style scoped></style>
