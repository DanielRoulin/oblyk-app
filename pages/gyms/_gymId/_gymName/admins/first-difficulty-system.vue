<template>
  <v-container
    v-if="gym"
    class="global-form-width"
  >
    <v-row>
      <v-col>
        <p class="text-center mb-7">
          <v-icon x-large>
            {{ mdiTagMultiple }}
          </v-icon>
        </p>
        <p class="heading text-center">
          {{ $t('components.gym.firstDifficultySystemExplain') }}
        </p>
        <p class="heading text-center">
          {{ $t('components.gym.firstDifficultySystemExplainTow') }}
        </p>
        <p class="text-center mt-10">
          <v-btn
            elevation="0"
            color="primary"
            :to="`${gym.adminPath}/grades/new`"
          >
            {{ $t('components.gym.createDifficultySystemSpace') }}
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiTagMultiple } from '@mdi/js'
import { GymConcern } from '@/concerns/GymConcern'

export default {
  meta: { orphanRoute: true },
  mixins: [GymConcern],

  data () {
    return {
      mdiTagMultiple
    }
  },

  i18n: {
    messages: {
      fr: {
        metaTitle: 'Premier système de difficulté'
      },
      en: {
        metaTitle: 'First difficulty system'
      }
    }
  },

  head () {
    return {
      title: this.$t('metaTitle')
    }
  }
}
</script>
