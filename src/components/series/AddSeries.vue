<template>
  <base-dialog v-if='inputIsInvalid' title='Invalid input' @close="confirmError">
    <template #default>
      <p>At least one character is needed.</p>
      <p>Please check all inputs.</p>
    </template>
    <template #actions>
      <base-button mode='btn--big' @click='confirmError'>Okay</base-button>
    </template>
  </base-dialog>
  <div class='text-center mt-6'>
    <h2>Add series</h2>
    <form>
      <div class='form-control'>
        <label for='title'>Title</label>
        <input type='text'
               name='title'
               id='title'
               ref='titleInput'>
      </div>
      <div class='form-control'>
        <label for='description'>Description</label>
        <textarea name='description'
                  id='description'
                  cols='30'
                  rows='4'
                  ref='descInput'></textarea>
      </div>
      <div class='form-control'>
        <label for='link'>Link</label>
        <input type='text'
               name='link'
               id='link'
               ref='linkInput'>
      </div>
      <div class='mt-6'>
        <base-button type='submit'
                     mode='btn--big'
                     @click.prevent='submitForm'>Submit</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddSeries',
  inject: ['addSeries'],
  data() {
    return {
      inputIsInvalid: false,
    }
  },
  methods: {
    submitForm() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }
      this.addSeries(enteredTitle, enteredDesc, enteredLink);
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
form{
  max-width: 600px;
  margin: 2rem auto;
}

.form-control{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.form-control input{
  padding: 7px 5px;
}

.mt-6{
  margin-top: 1.5rem;
}

.text-center{
  text-align: center;
}

</style>
