<template>
  <div class="suggestions">
    <div v-for="suggestion in collection">
      <router-link
        tag="div"
        class="suggestion"
        :to="{ name: suggestion.type, params: { id: suggestion.mbid } }">
          <div class="suggestion__name">
            {{ suggestion.name }}
          </div>
          <div class="suggestion__type">
            {{ suggestion.type }}
          </div>
          <img :src="suggestion.image"/>
        </router-link>
    </div>
  </div>
</template>

<script>
import { get } from 'lodash'

export default {
  name: 'search',
  data () {
    return {
      collection: []
    }
  },
  methods: {
    fetchData () {
      const query = get(this.$route, 'query.query', '')
      this.collection = [{"name":"Muse","mbid":"fd857293-5ab8-40de-b29e-55a69d4e4d0f","image":"https://lastfm-img2.akamaized.net/i/u/174s/c02beb4a355a40faaadf834422bbacef.png","type":"artist"},{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","image":"https://lastfm-img2.akamaized.net/i/u/174s/0b5a3148eab74a3fca1003c18a1e5a98.png","type":"artist"},{"name":"Danger Mouse","mbid":"4b356f05-bcc2-4544-925b-fd9a1bf708be","image":"https://lastfm-img2.akamaized.net/i/u/174s/e6509038e5f94affac51c297f0e2fcf7.png","type":"artist"},{"name":"Danger Mouse \u0026 Daniele Luppi","mbid":"4b356f05-bcc2-4544-925b-fd9a1bf708be","image":"https://lastfm-img2.akamaized.net/i/u/174s/17acc41d9cbb457d8542e6c029304412.png","type":"artist"},{"name":"Mouse on Mars","mbid":"4d4f5d92-0589-42fa-bc0e-1bd73e17a2ce","image":"https://lastfm-img2.akamaized.net/i/u/174s/778b6dffbc64421fbfd2fabec686edc7.png","type":"artist"},{"name":"Danger Mouse and Sparklehorse","mbid":"4b356f05-bcc2-4544-925b-fd9a1bf708be","image":"https://lastfm-img2.akamaized.net/i/u/174s/6476a13e89d44bae86c3403ce545269d.png","type":"artist"},{"name":"Throwing Muses","mbid":"b1b9d5cc-7975-43e5-960e-670583da7bc8","image":"https://lastfm-img2.akamaized.net/i/u/174s/1fa6e6c3e5314cb0922364acb50f497e.png","type":"artist"},{"name":"Museum","mbid":"e6129ed4-989e-4b39-ae3d-e48f1b64c28b","image":"https://lastfm-img2.akamaized.net/i/u/174s/1029a6d9ec5f42d3b1be66f6091d663f.png","type":"artist"},{"name":"Mouse on the Keys","mbid":"6a8744ac-5206-4d4d-84f0-78fc06924a8f","image":"https://lastfm-img2.akamaized.net/i/u/174s/95e7375c4e5a4a40805b7377871492e1.png","type":"artist"},{"name":"Faith and the Muse","mbid":"f1019a9e-2937-42ea-b2be-291eb1003573","image":"https://lastfm-img2.akamaized.net/i/u/174s/75975d6ca18c432383adf64f9ca74b3f.png","type":"artist"},{"name":"Absolution","artist":"Muse","mbid":"1dad9b13-1f02-33f6-815e-7fb2e6af17ea","url":"https://www.last.fm/music/Muse/Absolution","image":"https://lastfm-img2.akamaized.net/i/u/174s/76d9d3dc96e6ae51c01b4651c062947c.png","type":"album"},{"name":"Black Holes and Revelations","artist":"Muse","mbid":"aefcf53b-5980-463b-b03d-a6c8da6a9432","url":"https://www.last.fm/music/Muse/Black+Holes+and+Revelations","image":"https://lastfm-img2.akamaized.net/i/u/174s/5a694d526fd8ee9cee01bada31f7f724.png","type":"album"},{"name":"The Resistance","artist":"Muse","mbid":"6a5d9eac-0fa6-3170-9cff-a1cb832fd8cd","url":"https://www.last.fm/music/Muse/The+Resistance","image":"https://lastfm-img2.akamaized.net/i/u/174s/dd4c95317aaa3537dbf0a8dc4d9c7d79.png","type":"album"},{"name":"Origin of Symmetry","artist":"Muse","mbid":"1cc29145-b0e4-47bf-8bda-a1edef67dd1d","url":"https://www.last.fm/music/Muse/Origin+of+Symmetry","image":"https://lastfm-img2.akamaized.net/i/u/174s/4f35bbf84867e16328a9d1e0e64999cc.png","type":"album"},{"name":"Good News For People Who Love Bad News","artist":"Modest Mouse","mbid":"ae7e41d6-ea04-455b-9107-80a94a24443c","url":"https://www.last.fm/music/Modest+Mouse/Good+News+For+People+Who+Love+Bad+News","image":"https://lastfm-img2.akamaized.net/i/u/174s/63934c8eb75c4b649821ae02e564239a.png","type":"album"},{"name":"The 2nd Law","artist":"Muse","mbid":"e3c0e7c7-df7c-4b51-9894-e45d1480e7b5","url":"https://www.last.fm/music/Muse/The+2nd+Law","image":"https://lastfm-img2.akamaized.net/i/u/174s/0263c196b215cc6ee4016ddd75b1af2c.png","type":"album"},{"name":"Showbiz","artist":"Muse","mbid":"c8d7945e-e193-4677-b39e-248ce81936e7","url":"https://www.last.fm/music/Muse/Showbiz","image":"https://lastfm-img2.akamaized.net/i/u/174s/ab536e29d6814fc0b771351495f711e5.png","type":"album"},{"name":"Mickey Mouse Operation","artist":"Little People","mbid":"db4d5128-f065-4938-8161-c50cf64b6f05","url":"https://www.last.fm/music/Little+People/Mickey+Mouse+Operation","image":"https://lastfm-img2.akamaized.net/i/u/174s/841ed03abe3666b5cb9973b81b928143.png","type":"album"},{"name":"We Were Dead Before The Ship Even Sank","artist":"Modest Mouse","mbid":"8ee412d3-eadc-3a75-8e2b-41c597bad4ec","url":"https://www.last.fm/music/Modest+Mouse/We+Were+Dead+Before+The+Ship+Even+Sank","image":"https://lastfm-img2.akamaized.net/i/u/174s/63fc6e6623074865bc5b5756424188d4.png","type":"album"},{"name":"The Mouse and the Mask","artist":"DANGERDOOM","mbid":"de92f6d3-8d9a-3152-abdf-f6e723c3d1ac","url":"https://www.last.fm/music/DANGERDOOM/The+Mouse+and+the+Mask","image":"https://lastfm-img2.akamaized.net/i/u/174s/d96cc2ecc47e4849c8858e37d3854b84.png","type":"album"}]
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/constants';
@import '~assets/stylesheets/mixins';

.suggestions {
}

.suggestion {
  margin: 10px;
}
</style>
