<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: aliceblue;
  margin: 1rem;
}

</style>
