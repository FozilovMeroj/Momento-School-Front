<script lang="ts" setup>
const headers = [
  {title: 'Boat Type', align: 'start', key: 'name'},
  {title: 'Speed(knots)', align: 'end', key: 'speed'},
  {title: 'Length(m)', align: 'end', key: 'length'},
  {title: 'Year', align: 'end', key: 'year'},
]
</script>

<template>
  <VCard>
    <VCardText>
      <VDataTable :headers="headers"
                  :items="[]"
                  fixed-header
                  item-value="name"/>
    </VCardText>
  </VCard>
</template>

<style scoped></style>
