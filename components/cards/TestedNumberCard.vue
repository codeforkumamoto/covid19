<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stacked-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-stacked-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="Data.inspections_summary.date"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :unit="$t('件.tested')"
      :url="'https://www.pref.kumamoto.jp/soshiki/211/50632.html'"
      :data-labels="inspectionsDataLabels"
      :remarks="remarks"
    >
      <!-- 件.tested = 検査数 -->
    </time-stacked-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'

export default {
  components: {
    TimeStackedBarChart
  },
  data() {
    // 検査実施日別状況
    const inspectionsGraph = [
      Data.inspections_summary.data['熊本県'],
      Data.inspections_summary.data['熊本市']
    ]
    const inspectionsItems = [
      this.$t('県検査分(熊本市を除く)'),
      this.$t('熊本市検査分')
    ]
    const inspectionsLabels = Data.inspections_summary.labels
    const inspectionsDataLabels = [this.$t('県(熊本市以外)'), this.$t('熊本市')]

    const remarks = [
      this.$t('同一の対象者について複数の検体を検査する場合あり'),
      this.$t(
        '速報値として公開するものであり、後日確定データとして修正される場合あり'
      )
    ]

    const data = {
      Data,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels,
      inspectionsDataLabels,
      remarks
    }
    return data
  }
}
</script>

<style module lang="scss">
.Graph {
  &Desc {
    margin: 0;
    margin-top: 1rem;
    padding-left: 0 !important;
    font-size: 12px;
    color: $gray-3;
    list-style: none;
  }
}
</style>
