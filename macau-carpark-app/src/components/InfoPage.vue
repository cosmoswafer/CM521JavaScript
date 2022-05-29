<template>
  <f7-page @page:init="onPageInit">
    <f7-navbar title="Info Page" back-link="返回"></f7-navbar>
    <f7-block>
      <div class="data-table card">
        <table>
          <thead>
            <tr>
              <th class="label-cell">Carpark</th>
              <th class="numeric-cell">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-cell">Name</td>
              <td class="numeric-cell">{{ this.carpark.name }}</td>
            </tr>
            <tr>
              <td class="label-cell">Address</td>
              <td class="numeric-cell">{{ this.carpark.address }}</td>
            </tr>
            <tr>
              <td class="label-cell">🚙</td>
              <td class="numeric-cell">{{ this.carpark.car }}</td>
            </tr>
            <tr>
              <td class="label-cell">🛵</td>
              <td class="numeric-cell">{{ this.carpark.motor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  props: {
    carpark: Object,
  },
  methods: {
    onPageInit() {
      // eslint-disable-next-line no-console
      console.log(this.carpark);
    },
  },
};
</script>