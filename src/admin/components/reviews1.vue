<template lang="pug">
  .container.review
    .review__title-wrap
      h1.review__title Блок "Отзывы"
    .review__list
      .review__item.review__create
        .review__create_icon
        .review__create_text_wrap
          .review__create_text Добавить работу

      .review__item(v-for="review in reviews")
        //- Review(:review="review")
        .review__item_user_wrap
          .review__item_user
            .review__item_photo-wrap
              img(:src="review.avatar").review__item_photo
            .review__item_info_wrap
              .review__item_name {{review.name}}
              .review__item_status {{review.status}}
          .review__item_text-wrap
            .review__item_text {{review.text}}
          .review__item_actions_wrap
            .review__item_actions
              .review__item_correct(@click="editReview") Править
              .review__item_delete Удалить
 
</template>

<script>
import Review from "./review";
export default {
	data() {
		return {
			reviews: [],
		};
	},
	components: {
		Review,
	},
	methods: {
		fixedImagePath() {
			this.reviews = this.reviews.map((item) => {
				item.avatar = require(`../../images/content/${item.avatar}`).default;
				return item;
			});
		},
		editReview() {
			console.log("тут мы будет редактировать ревью");
		},
	},
	mounted() {
		this.fixedImagePath();
	},
	created() {
		this.reviews = require("../../data/reviews.json");
	},
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.container {
	@include phones {
		width: 100%;
	}
}
.review {
	&__list {
		display: flex;
		flex-wrap: wrap;
	}
	&__title {
		font-weight: bold;
		font-size: 21px;
		line-height: 29px;
		&-wrap {
			margin-bottom: 51px;
		}
	}
	&__item {
		width: calc((100%-6%) / 3);
		background: white;
		margin-right: 3%;
		min-height: 380px;
		/* border: 1px solid black; */
		margin-bottom: 28px;
		padding: 30px;
		position: relative;
		&:nth-child(3n) {
			margin-right: 0;
		}
		@include tablets {
			width: calc((100%-6%) / 2);
			margin-right: 3%;
			&:nth-child(3n) {
				margin-right: 3%;
			}
			&:nth-child(2n) {
				margin-right: 0;
			}
		}
		@include phones {
			width: 100%;
			margin-right: 0%;
			&:nth-child(2n) {
				margin-right: 0px;
			}
			&:nth-child(3n) {
				margin-right: 0%;
			}
		}
		&_correct {
			margin-right: 180px;
			&:hover {
				cursor: pointer;
			}
		}
		&_delete {
			&:hover {
				cursor: pointer;
			}
		}
		&_actions {
			display: flex;
			justify-content: space-between;

			&_wrap {
				position: absolute;
				bottom: 2%;
			}
		}
		&_user {
			display: flex;
			padding-bottom: 29px;
			border-bottom: 1px solid grey;
			margin-bottom: 27px;
			&_wrap {
				display: flex;
				flex-direction: column;
				height: 100%;
			}
		}
		&_photo {
			object-fit: cover;
			&-wrap {
				width: 54px;
				height: 54px;

				border-radius: 50%;
				margin-right: 10px;
				overflow: hidden;
			}
		}
		&_name {
			font-weight: bold;
			font-size: 18px;
			line-height: 25px;
			color: #414c63;
			margin-bottom: 2px;
		}
		&_status {
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
			color: rgba(65, 76, 99, 0.5);
		}
		&_text {
			font-weight: 600;
			font-size: 16px;
			line-height: 30px;
			color: rgba(65, 76, 99, 0.7);
			&-wrap {
				margin-bottom: 24px;
			}
		}
	}
	&__create {
		background: linear-gradient(149.16deg, #0d5ee5 13.11%, #343dd0 84.24%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0px;
		&_icon {
			width: 150px;
			height: 150px;
			border: 1px solid white;
			border-radius: 50%;
			margin-bottom: 8px;
			position: relative;
			&:before,
			&::after {
				content: "";
				width: 30px;
				height: 2px;
				background-color: white;
				top: 50%;
				left: 50%;
				position: absolute;
				transform: translate(-50%, -50%);
			}
			,
			&::after {
				transform: translate(-50%, -50%) rotate(90deg);
			}
		}
		&_text {
			color: white;
			width: 50%;
			text-align: center;
			margin: 0 auto;
		}
	}
}
</style>
