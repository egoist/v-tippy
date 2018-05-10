<template>
  <div class="app">
    <section class="s1">
      <input v-model="settings.title">
      <select v-model="settings.placement">
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <input type="checkbox" v-model="html"> Use HTML
      <div id="html" style="display: none">
        <strong>this is html</strong>
      </div>
      <button
        :title="settings.title"
        v-tippy="{placement: settings.placement, onShown: settings.onShown, html: html ? '#html' : undefined}"
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
        placement: 'bottom',
        onShown: () => console.log('shown!')
      },
      html: false
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
