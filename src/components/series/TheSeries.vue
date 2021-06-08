<template>
  <div class='series'>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href='link'></a>
    <button>Delete</button>
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Merriweather&display=swap');

h1,h2,h3,h4 {
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
}

p{
  font-family: 'Merriweather', serif;
  line-height: 1.5;
}

.series{
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: aliceblue;
}

button{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 50px;
  height: 50px;
  border: none;
  background: #dc4663;
  transition: 0.3s background ease;
  color: white;
}

button:hover{
  cursor: pointer;
  background-color: crimson;
}

</style>
