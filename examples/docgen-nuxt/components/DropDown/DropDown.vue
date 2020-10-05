<template>
	<select name="mySelect">
		<!-- @slot where the options will be listed -->
		<slot />
	</select>
</template>

<script>
/**
 * @requires ./MyOption.vue
 * @order 3
 */
export default {
  name: 'DropDown'
}
</script>
