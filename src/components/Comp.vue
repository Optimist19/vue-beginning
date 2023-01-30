<template>
	<p>Component in another component</p>
	<p>{{surname}}</p>
</template>

<script>
	export default{
		// eslint-disable-next-line vue/multi-word-component-names
		name: "Comp",
		props:{
			surname: String
		}
	}
</script>