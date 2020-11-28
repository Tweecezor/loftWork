<template lang="pug">
.wrapper__container
  .admin__content
    HEADER
    NAVIGATION
    transition(name="page" mode="in-out")
      router-view
 
   


</template>

<script>
import HEADER from "./components/header";
import NAVIGATION from "./components/navigation";
import REVIEWS from "./components/reviews";

export default {
	components: {
		HEADER,
		NAVIGATION,
		REVIEWS,
	},
	data() {
		return {
			hello: "hello",
			string: "",
		};
	},
	methods: {
		clicked(string) {
			this.string = string;
		},
	},
};
</script>

<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.title-wrap {
	display: flex;
	margin-bottom: 30px;
	@include phones {
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		margin-bottom: 30px;
	}
}
.title {
	color: #414c63;
	font-size: 21px;
	font-weight: 700;
	line-height: 34px;
	margin-right: 50px;
	@include phones {
		margin-bottom: 30px;
	}
}

.btn {
	font-size: 16px;
	font-weight: 700;
	padding: 10px 20px;
	background: linear-gradient(to right, #ea7400 0%, #f29400 100%);
	border-radius: 25px;
	color: white;
	border: none;
	cursor: pointer;
	&:hover {
		background: linear-gradient(to left, #ea7400 0%, #f29400 100%);
	}
}

.user__img {
	border-radius: 50%;
	object-fit: cover;
	width: 45px;
	height: 45px;
	max-width: 45px;
	max-height: 45px;
}
.content {
	padding: 30px 30px;
	box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
	margin-bottom: 50px;
}

.wrapper__container {
	/* background: url("../images/content/background-main.jpg") no-repeat; */
	/* background: #f7f8f9; */
	min-height: 100vh;
	background-size: cover;
	position: relative;
	z-index: 2;
	&:before {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: rgba(255, 255, 255, 0.7);
	}
}
.admin__content {
	position: relative;
	z-index: 5;
	background: #e5e5e5;
}

.page-enter-active,
.page-leave-active {
	transition: opacity 1s, transform 1s;
}

.page-enter,
.page-leave-to {
	opacity: 0;
	animation: slide 1s;
	/* transform: translate(-700px); */
}

.page-enter-to,
.page-leave {
	opacity: 0;
	animation: slide 1s reverse;
	/* transform: translate(0); */
}

/* .page-enter-active {
	transition-delay: 1s;
} */

@keyframes slide {
	from {
		transform: translate(0%);
	}
	to {
		transform: translate(100%);
	}
}
</style>
