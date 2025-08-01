<script lang="ts" setup></script>

<template>
  <VApp class="layout">
    <LayoutDrawer/>
    <LayoutHeader/>
    <VMain>
      <VContainer>
        <slot/>
      </VContainer>
    </VMain>
  </VApp>
</template>

<style lang="scss">
</style>
