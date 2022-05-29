<template>
  <f7-page>
    <f7-navbar title="Macau Carpark Info"></f7-navbar>
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
    };
  },
  mounted() {
    f7ready((f7) => {
      console.log({ f7 });
      fetch(
        //`https://ios-dev.shortcutsapi.com/parking-info/parking-info-macau-ios-dev`
        `/parking-info-macau-ios-dev.json`
      )
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
    });
  },
  methods: {
    listCarpark: function (carparks) {
      const newCarparks = new Array();
      for (let c of carparks) {
        console.log("Pushing carpark", c.name);
        newCarparks.push(c.name);
      }
      this.carparks = newCarparks;
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