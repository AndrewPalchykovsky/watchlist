<template>
  <the-header title='Remember me'></the-header>
  <series-tabs></series-tabs>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader';
import SeriesTabs from '@/components/series/SeriesTabs';
export default {
  name: 'App',
  components: {
    TheHeader,
    SeriesTabs
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Merriweather&display=swap');

*{
  box-sizing: border-box;
}

h1,h2,h3,h4 {
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
}

p{
  font-family: 'Merriweather', serif;
  line-height: 1.5;
}

</style>
