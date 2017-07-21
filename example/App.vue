<template>
  <div class="app">
    <section class="s1">
      <input v-model="settings.title">
        <select v-model="settings.position">
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        <button
          :title="settings.title"
          v-tippy="{position: settings.position, onShown: settings.onShown}"
        >
          hover me
        </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hi: true,
      settings: {
        title: 'Hello World!',
        position: 'bottom',
        onShown: () => console.log('shown!')
      }
    }
  }
}
</script>

<style scoped>
.s1 {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
