import Vue from "vue";
import axios from "axios";
import animate from "animate.css";
axios.defaults.baseURL = "https://webdev-api.loftschool.com";

const btns = {
	template: "#works_btns",
	components: {},
	props: ["currentIndex", "works"],
	methods: {
		slide(direct) {
			this.$emit("changeSlide", direct);
		},
	},
	computed: {
		disablePrev() {
			return this.currentIndex === 0 ? true : false;
		},
		disableNext() {
			return this.currentIndex === this.works.length - 1 ? true : false;
		},
	},
	mounted() {
		console.log("btn mounted");
	},
};

const preview = {
	template: "#works_preview",
	components: { btns },
	props: ["works", "currentWork", "currentIndex"],
	methods: {
		slideWork(direct) {
			this.$emit("slide", direct);
		},
	},
	mounted() {
		console.log("preview mounted");
	},
};

const pictures = {
	template: "#works_pictures",
	components: { preview, btns },
	props: {
		currentIndex: Number,
		works: Array,
		currentWork: Object,
	},
	methods: {
		handleSlide(direct) {
			this.$emit("slide", direct);
		},
		slideWork(direct) {
			this.$emit("slide", direct);
		},
		beforeEnter(el) {
			el.classList.add("slider-in");
		},
		afterEnter(el) {
			el.classList.remove("slider-in");
		},
		leave(el) {
			el.classList.add("animate__hinge");
		},
		afterLeave(el) {
			el.classList.remove("animate__hinge");
		},
	},

	mounted() {
		console.log("pictures mounted");
	},
};

const tags = {
	template: "#works_tags",
	components: {},
	props: ["currentTags"],
	computed: {
		tags() {
			return this.currentTags.split(",");
		},
	},
	mounted() {
		console.log("tags mounted");
	},
};

const info = {
	template: "#works_info",
	components: { tags },
	props: ["currentWork"],
	mounted() {
		console.log("info mounted");
	},
};

new Vue({
	el: "#works__container",
	template: "#works_content",
	components: {
		pictures,
		info,
	},
	data() {
		return {
			currentIndex: 0,
			works: [],
			isShow: true,
			isDownloaded: false,
		};
	},
	methods: {
		changeImagePath(works) {
			works.map((item) => {
				// let newPath = require(`../images/content/${item.photo}`).default;
				let newPath = `https://webdev-api.loftschool.com/${item.photo}`;
				item.photo = newPath;
				return item;
			});
			return works;
		},
		changeSlide(direct) {
			switch (direct) {
				case "next":
					this.currentIndex++;
					break;
				case "prev":
					this.currentIndex--;
					break;
			}
		},
	},
	computed: {
		currentWork() {
			return this.works[this.currentIndex];
		},
		splicedWorks() {
			return [...this.works].splice(0, 3);
		},
	},
	async created() {
		// let data = require("../data/works.json");

		let { data } = await axios.get("/works/154");
		console.log(data);
		this.works = this.changeImagePath(data);
		this.isDownloaded = true;
		console.log(this.works);
	},
});
