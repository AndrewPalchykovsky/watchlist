<template>
  <button :type='type' :class='mode'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: ['type', 'mode']
};
</script>

<style scoped>
button {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 50px;
  height: 50px;
  border: none;
  transition: 0.3s background ease;
  color: white;
  margin-top: auto;
  background: black;
}

button:hover {
  cursor: pointer;
}

.warning{
  background: #dc4663;
}
.warning:hover{
  background-color: crimson;
}

</style>
