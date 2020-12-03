<template>
  <v-col cols="12" md="6" class="DataCard">
    <!-- <time-bar-chart
      :title="$t('帰国者・接触者相談 センター 相談件数(熊本県)')"
      :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
      :chart-id="'time-bar-chart-contacts'"
      :chart-data="contactsGraph"
      :date="Data.contacts.date"
      :unit="$t('件.reports')"
      :url="'https://www.pref.kumamoto.jp/soshiki/211/50632.html'"
    /> -->
    <!-- 件.reports = 窓口相談件数 -->
    <new-contacts-chart
      :date="Data.contacts.date"
      :daily-data="Data.contacts.data"
      :url="'https://www.pref.kumamoto.jp/soshiki/211/50632.html'"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
// import formatGraph from '@/utils/formatGraph'
// import TimeBarChart from '@/components/TimeBarChart.vue'
import NewContactsChart from '@/components/NewContactsChart.vue'

export default {
  components: {
    // TimeBarChart,
    NewContactsChart
  },
  data() {
    // 相談件数
    // const contactsGraph = formatGraph(Data.contacts.data)

    const data = {
      Data
      // contactsGraph
    }
    return data
  }
}
</script>
