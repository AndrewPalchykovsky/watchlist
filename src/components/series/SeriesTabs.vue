<template>
  <div>
    <base-button @click="setSelectedTab('stored-series')">Stored series</base-button>
    <base-button @click="setSelectedTab('add-series')">Add series</base-button>
  </div>
  <component :is='selectedTab'></component>
</template>

<script>
import StoredSeries from '@/components/series/StoredSeries';
import AddSeries from '@/components/series/AddSeries';

export default {
  name: 'SeriesTabs',
  components: {
    StoredSeries,
    AddSeries,
  },
  data() {
    return {
      selectedTab: 'stored-series',
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
    }
  },
  provide() {
    return {
      source: this.allSeries
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  }
};
</script>

<style scoped>

</style>
