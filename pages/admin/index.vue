<template>
  <div>
    <h1>Аналитика по постам</h1>
    <app-analytics-chart
        title="Количество просмотров"
        :labels="views.labels"
        :data="views.data"
    ></app-analytics-chart>
    <app-analytics-chart
        title="Количество комментариев"
        :labels="comments.labels"
        :data="comments.data"
    ></app-analytics-chart>
  </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'
export default {
  layout: 'admin',
  head: {
    title: `Аналитика | ${process.env.appName}`
  },
  components: {AppAnalyticsChart},
  middleware: ['admin-auth'],
  async asyncData({store}) {
      const {views, comments} = await store.dispatch('post/getAnalytics')
      return {views, comments}
  }  
}
</script>
