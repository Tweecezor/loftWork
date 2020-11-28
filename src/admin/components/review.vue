<template lang="pug">
  .review__item_user-wrap
    .review__item_user
      .review__item_photo-wrap
        img(:src="review.avatar").review__item_photo
      .review__item_info-wrap
        .review__item_name {{review.name}}
        .review__item_status {{review.status}}
    .review__item_text-wrap
      .review__item_text {{review.text}}
    .review__item_actions-wrap
      .review__item_actions
        .review__item_correct Править
        .review__item_delete Удалить
</template>

<script>
export default {
	props: {
		review: Object,
	},
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.review {
	&__title {
		font-weight: bold;
		font-size: 21px;
		line-height: 29px;
		&-wrap {
			margin-bottom: 50px;
		}
	}
	&__list {
		display: flex;
		flex-wrap: wrap;
	}
	&__item {
		width: calc((100%-6%) / 3);
		margin-right: 3%;
		min-height: 385px;
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
			margin-right: 0;
			&:nth-child(3n) {
				margin-right: 0;
			}
			&:nth-child(2n) {
				margin-right: 0;
			}
		}
		background: white;
		&_user {
			display: flex;
			padding-bottom: 29px;
			border-bottom: 1px solid grey;
			margin-bottom: 27px;
			&-wrap {
				display: flex;
				flex-direction: column;
			}
		}
		&_correct {
			margin-right: 160px;
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
			&-wrap {
				position: absolute;
				bottom: 2%;
			}
		}

		&_photo {
			object-fit: cover;
			&-wrap {
				width: 54px;
				height: 54px;
				border-radius: 50%;
				margin-right: 18px;
				overflow: hidden;
			}
		}

		&_text {
			font-weight: 600;
			font-size: 16px;
			line-height: 30px;
			color: rgba(65, 76, 99, 0.7);
			&-wrap {
				margin-bottom: 20px;
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
			color: rgba(65, 76, 99, 0.5);
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
		}
	}
	&__create {
		background: linear-gradient(149.16deg, #0d5ee5 13.11%, #343dd0 84.24%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: white;
		&_icon {
			width: 150px;
			height: 150px;
			border: 1px solid white;
			border-radius: 50%;
			margin-bottom: 22px;
			position: relative;
			&::before,
			&::after {
				content: "";
				width: 30px;
				height: 2px;
				background: white;
				top: 50%;
				left: 50%;
				position: absolute;
				transform: translate(-50%, -50%);
			}
			&::after {
				transform: translate(-50%, -50%) rotate(90deg);
			}
		}
		&_text {
			width: 50%;
			margin: 0 auto;
			text-align: center;
			font-weight: bold;
			font-size: 18px;
			line-height: 25px;
		}
	}
}
</style>
