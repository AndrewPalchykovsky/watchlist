<template>
  <teleport to='body'>
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name='header'>
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name='actions'>
          <base-button @click="$emit('close')">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    title: {
      type: String,
      required: false
    }
  },
  emits: ['close']
};
</script>

<style scoped>
div {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

dialog {
  position: fixed;
  z-index: 2;
  top: 20vh;
  left: 30%;
  width: 40%;
  border-radius: 0.75rem;
  background-color: #fff;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 0;
}

menu {
  padding-left: 0;
}

</style>
