<!--
- @copyright Copyright (c) 2021 Lyseon Tech <contato@lt.coop.br>
-
- @author Lyseon Tech <contato@lt.coop.br>
- @author Vinicios Gomes <viniciusgomesvaian@gmail.com>
-
- @license GNU AGPL version 3 or any later version
-
- This program is free software: you can redistribute it and/or modify
- it under the terms of the GNU Affero General Public License as
- published by the Free Software Foundation, either version 3 of the
- License, or (at your option) any later version.
-
- This program is distributed in the hope that it will be useful,
- but WITHOUT ANY WARRANTY; without even the implied warranty of
- MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
- GNU Affero General Public License for more details.
-
- You should have received a copy of the GNU Affero General Public License
- along with this program.  If not, see <http://www.gnu.org/licenses/>.
-
-->

<template>
	<div class="container">
		<div id="img" />
		<div class="content">
			<h2 v-for="error in errors" :key="error">
				{{ error }}
			</h2>
			<p>{{ paragth }}</p>
		</div>
	</div>
</template>

<script>
import { translate as t } from '@nextcloud/l10n'

export default {
	name: 'DefaultPageError',

	data() {
		return {
			errors: this.$store.getters.getError.length > 0
				? this.$store.getters.getError
				: 'Page not found.',
			paragth: t('libresign', 'Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.'),
		}
	},
}
</script>

<style lang="scss" scoped>
.container{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-image: url('../../img/bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	#img{
		background-image: url('../../img/404.png');
		height: 400px;
		width: 400px;
		background-repeat: no-repeat;
		background-size: cover;
	}

}

.content{
	box-sizing: border-box;
	font-family: 'Nunito', sans-serif;
	text-transform: uppercase;
	max-width: 560px;
	padding-left: 50px;
	margin-top: -100px;

	h2{
		color: white;
		font-size: 36px;
		font-weight: 400;
		line-height: 23.1px;
		margin: 0px;
		margin-bottom: 10px;
	}
	p{
		margin-top: 20px;
		color: white;
		font-weight: 400;
		line-height: 17.6px;
		font-size: 16px;
	}
}

@media screen and (max-width: 950px) {
	#img{
		margin-left: -50px;
	}
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.content{
		margin-top: 50px;
		width: 90%;
	}

}

@media screen and (max-width: 515px) {
	#img{
		background-image: url('../../img/404-mobile.png') !important;
		width: 265px !important;
		height: 252px !important;
	}
	.content{
		padding-left: 0px !important;
		h2{
			text-align: center;
			font-size: 22px;
			font-weight: 600;
		}
	}
}

@media screen and (max-width: 376px) {
	#img{
		margin-left: -15px !important;
		width: 265px !important;
		height: 252px !important;
		align-items: center;
		justify-content: center;
		align-self: center;
	}
	.content{
		align-items: center;
		padding-left: 0px !important;
		width: 90%;
		h2{
			font-size: 22px;
		}
	}
}
</style>
