<template>
  <p>{{ Aula }}</p>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'aula',
  props: ['aula'],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  },
};
</script>

<style></style>
