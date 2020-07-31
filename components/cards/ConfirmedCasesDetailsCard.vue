<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="Data.patients.date"
      :url="'https://www.pref.kumamoto.jp/kiji_22038.html'"
      :remarks="remarks"
    >
      <!-- <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）熊本県内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '検査実施人数は、速報値として公開するものであり、後日確定データとして修正される場合があります'
              )
            }}
          </li>
        </ul>
      </template> -->
      <confirmed-cases-details-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </data-view>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)

    const updatedAt = dayjs(Data.main_summary.children[0].date).format(
      'YYYY/MM/DD HH:mm'
    )

    const remarks = [
      this.$t(
        '熊本県内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載'
      ),
      this.$t(
        '陽性者数は件数であり、同一人物に複数回の感染がある場合、別としてカウントする'
      ),
      this.$t(
        '軽症・中等症には無症状も含む'
      )
    ]

    const data = {
      Data,
      confirmedCases,
      updatedAt,
      remarks
    }
    return data
  }
}
</script>
