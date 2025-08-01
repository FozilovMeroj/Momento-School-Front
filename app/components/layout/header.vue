<script lang="ts" setup>
const config = useRuntimeConfig();
const theme = useTheme()
const isFullscreen = ref(false)
const getInitials = (name: string) => {
  return name
      .trim()
      .split(/\s+/)
      .slice(0, 3)
      .map(word => word[0]?.toUpperCase())
      .join('');
}
const updateFullscreenStatus = () => {
  isFullscreen.value = !!document.fullscreenElement
}
const changeFullScreenMode = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    const elem = document.querySelector("body")!;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
}
const changeTheme = () => {
  theme.change(theme.name.value === 'dark' ? 'light' : 'dark')
}
onMounted(() => {
  document.addEventListener('fullscreenchange', updateFullscreenStatus)
  updateFullscreenStatus()
})
onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', updateFullscreenStatus)
})
</script>

<template>
  <VAppBar color="transparent" elevation="0">
    <VContainer>
      <VCard class="w-100 header_card">
        <VCardText class="py-2 flex justify-between">
          <div class="flex gap-2 align-center">
            <IconsLogo/>
            <VAppBarTitle> {{ config.public.appTitle }}</VAppBarTitle>
          </div>
          <div class="d-flex align-center gap-3">
            <VBtn v-tooltip:bottom="$t('header.maximize')" density="comfortable" icon @click="changeFullScreenMode">
              <Icon :name="isFullscreen ? 'tabler:minimize' : 'tabler:maximize'"/>
            </VBtn>
            <VBtn v-tooltip:bottom="$t('header.theme')" density="comfortable" icon @click="changeTheme">
              <Icon :name="theme.name.value === 'dark' ? 'tabler:moon' :'tabler:sun'"/>
            </VBtn>
            <VBtn v-tooltip:bottom="$t('header.language')" density="comfortable" icon>
              <Icon name="tabler:language"/>
            </VBtn>
            <VBtn v-tooltip:bottom="$t('header.messages')" density="comfortable" icon>
              <Icon name="tabler:messages"/>
            </VBtn>
            <VBtn v-tooltip:bottom="$t('header.notifications')" density="comfortable" icon>
              <Icon name="tabler:bell-ringing"/>
            </VBtn>
            <div class="d-flex gap-2 items-center cursor-pointer">
              <VAvatar color="primary">
                {{ getInitials('Fozilov Meroj') }}
              </VAvatar>
              <div>
                <div class="text-sm font-bold truncate w-[125px]">Fozilov Meroj</div>
                <div class="text-xs truncate w-[100px]">fozilovmerodz@gmail.com</div>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
    </VContainer>
  </VAppBar>
</template>

<style lang="scss" scoped>
</style>
