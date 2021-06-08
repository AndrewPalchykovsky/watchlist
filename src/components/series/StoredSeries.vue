<template>
  <div class='content-wrapper'>
    <the-series v-for='series in source'
                :key='series.id'
                :title='series.title'
                :description='series.description'
                :img='series.img'
                :link='series.link'>
    </the-series>
  </div>
</template>

<script>
import TheSeries from '@/components/series/TheSeries';
export default {
  name: 'StoredSeries',
  components: {
    TheSeries
  },
  props: ['source']
};
</script>

<style scoped>
.content-wrapper{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 1rem;
  padding: 1rem 0;
}

</style>
