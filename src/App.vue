<template>
  <the-header title='Remember me'></the-header>
  <stored-series :source='allSeries'></stored-series>
</template>

<script>
import StoredSeries from '@/components/series/StoredSeries';
import TheHeader from '@/components/layouts/TheHeader';
export default {
  name: 'App',
  components: { StoredSeries, TheHeader },
  data() {
    return {
      allSeries: [
        {
          id: 'Breaking-Bad',
          title: 'Breaking Bad',
          description: 'A high school teacher with terminal cancer, along with a former student, manufactures and sells methamphetamine to ensure a prosperous future for his family.',
          link: 'https://www.netflix.com/title/70143836',
        },
        {
          id: 'Better-call-saul',
          title: 'Better Call Saul',
          description: 'The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.',
          link: 'https://www.netflix.com/ua-ru/title/80021955',
        },
      ]
    };
  }
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
