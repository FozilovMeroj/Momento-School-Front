<script setup lang="ts"></script>

<template>
  <VApp class="layout">
    <LayoutDrawer />
    <LayoutHeader />
    <VMain>
      <VContainer>
        <slot />
      </VContainer>
    </VMain>
  </VApp>
</template>

<style lang="scss">
.layout {
  background-color: $primaryDarker;
}
</style>
