<template>
  <div class='tabs-wrapper'>
    <base-button :mode='storedSeriesMode' @click="setSelectedTab('stored-series')">Stored series</base-button>
    <base-button :mode='addSeriesMode' @click="setSelectedTab('add-series')">Add series</base-button>
  </div>
  <keep-alive>
    <component :is='selectedTab'></component>
  </keep-alive>
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
      source: this.allSeries,
      addSeries: this.addSeries
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addSeries(title, description, url) {
      const newSeries = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }
      this.allSeries.unshift(newSeries);
      this.selectedTab = 'stored-series';
    }
  },
  computed: {
    storedSeriesMode() {
      return this.selectedTab === 'stored-series' ? 'btn--default' : 'btn--nav'
    },
    addSeriesMode() {
      return this.selectedTab === 'add-series' ? 'btn--default' : 'btn--nav'
    }
  },
};
</script>

<style scoped>

.tabs-wrapper{
  text-align: center;
}

</style>
