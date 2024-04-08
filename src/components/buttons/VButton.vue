<template>
  <button
      class="button"
      :class="{'outline': outline, 'danger': danger, 'full': full}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: false,
      required: false
    },
    danger: {
      type: Boolean,
      default: false,
      required: false
    },
    full: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style scoped>
.button{
  font-size: 16px;
  height: 40px;
  padding: 5px 11px;
  background-color: var(--primary);
  border: 1px solid var(--primary);
  color: var(--white);
  border-radius: 6px;
}
.button:hover{
  opacity: 1.2;
}
.button.danger{
  background-color: var(--danger);
  border-color: var(--danger);
}
.button.outline{
  background-color: transparent;
  color: var(--primary);
}
.button.outline.danger{
  color: var(--danger);
}
.button.full{
  width: 100%;
}
</style>