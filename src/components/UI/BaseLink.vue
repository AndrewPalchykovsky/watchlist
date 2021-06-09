<template>
  <a href='' :class='mode'>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: ['mode']
};
</script>

<style scoped>

.link{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 50px;
  height: 50px;
  border: none;
  transition: 0.3s background ease;
  color: white;
  margin-top: auto;
  background: cornflowerblue;
  text-align: center;
  text-decoration: none;
}

</style>
