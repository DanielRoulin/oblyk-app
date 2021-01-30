import CragRoute from '@/models/CragRoute'

export const CragRouteConcern = {
  data () {
    return {
      cragRoute: null
    }
  },

  beforeRouteEnter (to, from, next) {
    if (!to.params.cragId || !to.params.cragRouteId) {
      next()
    } else {
      new CragRoute()
        .find(
          to.params.cragId,
          to.params.cragRouteId
        )
        .then(resp => {
          next(vm => {
            vm.cragRoute = resp
          })
        })
        .catch(err => {
          next(vm => vm.$root.$emit('alertFromApiError', err, 'cragRoute'))
        })
    }
  },

  beforeRouteUpdate (to, from, next) {
    if (!to.params.cragId || !to.params.cragRouteId) {
      next()
    } else if (from.params.cragRouteId === to.params.cragRouteId) {
      next()
    } else {
      new CragRoute()
        .find(
          to.params.cragId,
          to.params.cragRouteId
        )
        .then(resp => {
          this.cragRoute = resp
          next()
        })
        .catch(err => {
          this.$root.$emit('alertFromApiError', err, 'cragRoute')
          next()
        })
    }
  }
}