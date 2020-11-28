<template lang="pug">
    div.wrap
     h2 ABOUT
</template>
<script>
import appInput from "../components/input/input";
import { Validator, mixin } from "simple-vue-validator";
export default {
	mixins: [mixin],
	validators: {
		value: (val) => {
			return Validator.value(val).required("ВВедите что-то");
		},
		value2: (val) => {
			return Validator.value(val).required("Второй ");
		},
	},
	components: {
		appInput,
	},
	data() {
		return {
			value: "",
			value2: "",
		};
	},
	methods: {
		// async handleInput(){
		//   let isvalid = await this.$validate();
		//   console.log(isvalid);
		// }
	},
};
</script>

<style lang="postcss" scoped>
.wrap {
	width: 300px;
	height: 40px;
	border-bottom: 1px solid black;
	margin: 0 auto;
}
</style>
