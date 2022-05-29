<template>
  <f7-page ptr @ptr:refresh="refresh">
    <f7-navbar>
      <f7-nav-title>Macau Carpark Info</f7-nav-title>
      <f7-nav-right>
        <f7-link @click="locateUser" v-if="!isLocating">定位</f7-link>
      </f7-nav-right></f7-navbar
    >

    <f7-block-title>Car Park List</f7-block-title>
    <f7-list>
      <f7-list-item
        v-for="(c, i) in carparks"
        @click="f7router.navigate('/info/', { props: { carpark: c } })"
        :key="i"
        :title="c.name"
        :footer="`🚙 ${c.car} 🛵 ${c.motor}`"
      >
        <f7-icon icon="demo-list-icon"></f7-icon
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { f7ready } from "framework7-vue";

export default {
  props: {
    f7router: Object,
  },
  data() {
    return {
      carparks: [],
      location: {
        lat: null,
        lng: null,
      },
      isLocating: false,
    };
  },
  computed: {
    locationCombined() {
      return this.location.lat && this.location.lng;
    },
  },
  watch: {
    locationCombined() {
      // eslint-disable-next-line no-console
      console.log(`location is being updated`);
      this.fetchCarparks();
    },
  },
  mounted() {
    f7ready((f7) => {
      console.log({ f7 });
      this.fetchCarparks();
    });
  },
  methods: {
    refresh: function (done) {
      this.fetchCarparks();
      setTimeout(() => done(), 500);
    },
    fetchCarparks: function () {
      let url = `https://ios-dev.shortcutsapi.com/parking-info/parking-info-macau-ios-dev`;

      if (this.location.lat != null && this.location.lng != null) {
        url += `?lat=${this.location.lat}&lng=${this.location.lng}`;
      }

      fetch(url)
        .then((res) => {
          res.json().then((json) => {
            // eslint-disable-next-line no-console
            console.log(json);
            this.carparks = json.data;
          });
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    locateUser: function () {
      this.isLocating = true;
      navigator.geolocation.getCurrentPosition((location) => {
        // eslint-disable-next-line no-console

        this.location = {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        };
        this.isLocating = false;
        console.log(this.location);
      });
    },
  },
};
</script>

<style>
.list .item-footer {
  color: #333;
  margin-top: 0.5em;
}
</style>