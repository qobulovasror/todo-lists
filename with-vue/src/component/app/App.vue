<script>
import Header from '../header/Header.vue';
import ItemList from '../list/ItemList.vue'
import Filter from '../filter/Filter.vue';

export default {
  components: {
    Header,
    ItemList,
    Filter
  }
}
</script>

<template>
  <div class="container">
    <div class="card mt-5 p-4">
      <Header/>
      <Filter/>
      <ItemList/>
    </div>
  </div>
</template>

<style scoped></style>
