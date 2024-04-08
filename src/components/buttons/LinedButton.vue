<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.button{
  display: inline;
  font-size: 14px;
  transition: 0.3s;
  background-color: var(--white);
  color: var(--primary);
  border-bottom: 1px solid var(--primary);
  cursor: pointer;
}
.button:hover{
  border-color: var(--white);
}
</style>