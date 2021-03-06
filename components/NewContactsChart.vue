<template>
  <data-view
    :title="displayTitle"
    title-id="new-contacts-chart"
    :date="date"
    :url="url"
    :remarks="remarks"
  >
    <template v-if="showSelector" v-slot:button>
      <data-selector v-model="dataKind" :items="dataKinds" />
    </template>

    <div style="flex-grow: 1; display: flex; align-items: start;">
      <time-bar-line-chart
        chart-id="new-contacts-chart"
        :chart-data="chartData"
        legend-order-kind="desc"
        :y-axis-left-setting="yAxisLeftSetting"
      />
    </div>

    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
    <!-- <template v-slot:footer>
      <open-data-link v-show="url" :url="url" />
    </template> -->
  </data-view>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import dayjs, { Dayjs } from 'dayjs'
import * as Enumerable from 'linq'
import DataView from '@/components/DataView.vue'
// import DataSelector, { SelectorItem } from '@/components/DataSelector.vue'
import DataSelector, { SelectorItem } from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import DateSelectSlider from '@/components/DateSelectSlider.vue'
import TimeBarLineChart, {
  GraphData,
  YAxisSetting
} from '@/components/TimeBarLineChart.vue'
import { ContactsSummaryDaily } from '~/utils/types'
import OpenDataLink from '@/components/OpenDataLink.vue'

export type NewContactsAverageType = {
  date: Dayjs
  count: number
  average7days: number | undefined
  count7days: number | undefined
}

type DataKind = 'transition' | 'cumulative'

type DisplayInfo = {
  lText: string
  sText: string
  unit: string
}

@Component({
  components: {
    DataView,
    DataSelector,
    DataViewBasicInfoPanel,
    DateSelectSlider,
    TimeBarLineChart,
    OpenDataLink
  }
})
export default class NewContactsChart extends Vue {
  @Prop()
  public date?: string

  @Prop()
  public dailyData?: ContactsSummaryDaily[]

  @Prop()
  public url?: string

  private readonly yAxisLeftSetting: YAxisSetting = {
    min: 0,
    unit: '件',
    visible: true
  } as YAxisSetting

  private readonly remarks = [
    // this.$t('陽性者における日付は、公表日ではなく、検査により陽性が確定された日'),
    // this.$t('過去7日間の平均は、新規感染者数の後方7日移動平均値です')
  ]

  private readonly showSelector = true
  private dataKind: DataKind = 'transition'
  private readonly dataKinds = [
    { key: 'transition', label: this.$t('日別') } as SelectorItem,
    { key: 'cumulative', label: this.$t('累計') } as SelectorItem
  ]

  private readonly chartDataSet = new Map<DataKind, GraphData>()

  private get displayTitle(): string {
    return this.$t('帰国者・接触者相談 センター 相談件数(熊本県)').toString()
  }

  private formatDayBeforeRatio = (dayBeforeRatio: any) => {
    const dayBeforeRatioLocaleString = dayBeforeRatio.toLocaleString()
    const prefix = Math.sign(dayBeforeRatio) === 1 ? '+' : ''
    return `${prefix}${dayBeforeRatioLocaleString}`
  }

  private get displayDiffValue(): string {
    if (this.chartData.datasets[0].values.slice(-2)[0] === undefined) {
      return '-'
    }
    const lastDay = this.chartData.datasets[0].values.slice(-1)[0]
    const lastDayBefore = this.chartData.datasets[0].values.slice(-2)[0]
    return this.formatDayBeforeRatio(lastDay - lastDayBefore)
  }

  private get displayInfo(): DisplayInfo {
    if ((this.chartData?.datasets?.length ?? 0) <= 0) {
      return {
        lText: '-',
        sText: '-',
        unit: ''
      } as DisplayInfo
    }

    const dataset = this.chartData.datasets[0]
    const latestValueText = dataset.values.slice(-1)[0].toLocaleString()
    const diffLabel = '前日比'
    const latestDate = this.formatDateLabel(this.chartData.dates.slice(-1)[0])
    return {
      lText: latestValueText,
      sText: `${latestDate} 時点（${diffLabel}：${this.displayDiffValue} ${dataset.unit}）`,
      unit: dataset.unit
    }
  }

  private formatDateLabel = (date: string | string[]): string => {
    return (typeof date === 'string' ? [date] : date)
      .map(d => dayjs(d).format('M/D'))
      .join('～')
  }

  constructor() {
    super()

    this.chartDataSet.set('transition', this.buildDailyTransitionGraphData())
    this.chartDataSet.set('cumulative', this.buildDailyCumulativeGraphData())
  }

  private get chartData(): GraphData {
    const data = this.chartDataSet.get(this.dataKind)
    if (data) {
      return data
    } else {
      return {
        dates: [],
        datasets: []
      } as GraphData
    }
  }

  public static makeAverageNewContacts = (
    data: ContactsSummaryDaily[]
  ): Enumerable.IEnumerable<NewContactsAverageType> => {
    const source = Enumerable.from(data).reverse()
    return source
      .select(d => d['日付'])
      .select((_, index) => source.skip(index).take(7))
      .select(d => {
        const first = d.first()
        const ave =
          d.count() === 7
            ? d
                .where(d => d['小計'] !== undefined)
                .average(d => Number(d['小計']))
            : undefined
        const cnt =
          d.count() === 7
            ? d.where(d => d['小計'] !== undefined).sum(d => Number(d['小計']))
            : undefined

        return {
          date: dayjs(dayjs(first['日付']).format('YYYY-MM-DD')), // 時刻を切り落とす
          count: Number(first['小計']),
          average7days: ave,
          count7days: cnt
        }
      })
      .reverse()
  }

  private buildDailyTransitionGraphData = (): GraphData => {
    const now = dayjs()
    const rows = NewContactsChart.makeAverageNewContacts(this.dailyData ?? [])
      .where(d => d.date < now)
      .select(d => {
        return {
          date: d.date.format('YYYY-MM-DD'),
          count: d.count,
          average7days: d.average7days
        }
      })

    return {
      dates: rows.select(d => d.date).toArray(),
      datasets: [
        {
          type: 'bar',
          title: this.$t('相談件数'),
          unit: this.$t('件.reports'),
          values: rows.select(d => d.count).toArray(),
          order: 2
        }
      ]
    } as GraphData
  }

  private buildDailyCumulativeGraphData = (): GraphData => {
    let subTotal = 0
    const now = dayjs()
    const arr = (this.dailyData ?? [])
      .filter(d => dayjs(d['日付']) < now)
      .map(d => {
        subTotal += Number(d['小計'])
        return {
          date: dayjs(d['日付']).format('YYYY-MM-DD'),
          total: subTotal
        }
      })

    const rows = Enumerable.from(arr)

    return {
      dates: rows.select(d => d.date).toArray(),
      datasets: [
        {
          type: 'bar',
          title: this.$t('累計相談件数'),
          unit: this.$t('件.reports'),
          values: rows.select(d => d.total).toArray()
        }
      ]
    } as GraphData
  }
}
</script>
