<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: ['title']
};
</script>

<style scoped>

header{
  text-align: center;
  margin: 2rem auto;
}

</style>
