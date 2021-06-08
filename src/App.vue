<template>
  <stored-series :source='allSeries'></stored-series>
</template>

<script>
import StoredSeries from '@/components/series/StoredSeries';
export default {
  name: 'App',
  components: { StoredSeries },
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

<style scoped>


</style>
