<template>
  <div>
    <div contenteditable="true">
      <p>这是可编辑的</p>
      <p contenteditable="false">这是不可编辑的</p>
    </div>

    <button @click="exeBold">bold</button>
    <button @click="execCommand('insertUnorderedList')">无序列表</button>
    <button @click="execCommand('insertHorizontalRule')">水平线</button>
    <button @click="execCommand('undo')">后退</button>
    <button @click="execCommand('redo')">前进</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    exeBold() {
      document.execCommand("bold", false, null);
    },
    execCommand(cmd) {
      document.execCommand(cmd, false, null);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>