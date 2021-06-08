<template>
  <base-card>
    <header>
      <h1>{{ title }}</h1>
    </header>
    <p>{{ description }}</p>
    <a :href='link'></a>
    <button>Delete</button>
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
button {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 50px;
  height: 50px;
  border: none;
  background: #dc4663;
  transition: 0.3s background ease;
  color: white;
  margin-top: auto;
}

button:hover {
  cursor: pointer;
  background-color: crimson;
}


</style>
