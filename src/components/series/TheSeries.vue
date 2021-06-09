<template>
  <base-card>
    <header>
      <h1>{{ title }}</h1>
    </header>
    <p>{{ description }}</p>
    <base-link :href='link' mode='link'>
      Link
    </base-link>
    <base-button mode='warning'>Delete</base-button>
  </base-card>
</template>

<script>
export default {
  name: 'TheSeries',
  props: {
    title :{
      type: String,
      required: true
    },
    description :{
      type: String,
      required: true
    },
    link :{
      type: String,
      required: true
    },
  }
};
</script>

<style scoped>

</style>
