<template>
  <div>{{ name }}</div>
  <input v-model="search" />
  <div v-for="color in filteredColors" :key="color">
    <div :style="`color: ${color}`">{{ color }}</div>
  </div>
</template>

<script>
export default {
  name: 'FilterSearch',
  data() {
    return {
      name: 'Filter Search',
      colors: ['red', 'green', 'blue', 'yellow'],
      filteredColors: ['red', 'purple', 'green', 'blue', 'yellow'],
      search: '',
    };
  },
  watch: {
    search() {
      return this.filteredColors = this.colors.filter((item) => {
      return item.toLowerCase().includes(this.search.toLowerCase());
      });
      console.log(item);
    },
  },
};
</script>
<style></style>
