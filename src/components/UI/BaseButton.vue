<template>
  <button :class='mode'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: ['mode']
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

.btn--default{
  background-color: transparent;
  color: black;
  text-decoration: none;
  opacity: 0.62;
}

.btn--nav{
  background-color: transparent;
  color: black;
  text-decoration: underline;
  opacity: 1;
}

.btn--nav:hover{
  opacity: 1;
}

.btn--big{
  padding: 0 3rem;
}

</style>
