<template>
	<Content app-name="libresign" class="jumbotron">
		<div id="container">
			<div class="bg">
				<form>
					<Avatar id="avatar" :user="email.length ? email : 'User'" :size="sizeAvatar" />
					<div class="group">
						<input
							v-model="email"
							v-tooltip.right="{
								content: 'Insira seu email aqui.',
								show: tooltip.name,
								trigger: 'false',
							}"
							type="text"
							:required="validator.name"
							placeholder="Email"
							@focus="tooltip.nameFocus = true; tooltip.name = false"
							@blur="tooltip.nameFocus = false; validationName()">
						<div v-show="validator.name"
							class="icon-error-white" />
					</div>
					<div class="group">
						<input
							v-model="pass"
							v-tooltip.right="{
								content: 'A senha deve ter no mínimo 8 caracteres',
								show: tooltip.pass,
								trigger: 'false'
							}"
							type="password"
							:required="validator.pass"
							placeholder="Senha"
							@focus="tooltip.passFocus = true; tooltip.pass = false"
							@blur="tooltip.passFocus = false; validationPass()">
						<div v-show="validator.pass"
							class="icon-error-white" />
					</div>
					<div class="group">
						<input
							v-model="passConfirm"
							v-tooltip.right="{
								content: 'Senhas não coincidem',
								show: tooltip.passConfirm,
								trigger: 'false'
							}"
							type="password"
							:required="validator.passConfirm"
							placeholder="Confirmar senha"
							@focus="tooltip.passConfirmFocus = true; tooltip.passConfirm = false"
							@blur="tooltip.passConfirmFocus = false; validationPasswords()">
						<div v-show="validator.passConfirm"
							class="icon-error-white" />
					</div>

					<div
						v-tooltip.right="{
							content: 'Senha para confirmar assinatura no documento!',
							show: false,
							trigger: 'hover focus'
						}"
						class="group">
						<input
							v-model="pfx"
							:required="validator.pfx"
							placeholder="Senha PFX">
						<div v-show="validator.pfx" class="icon-error-white" />
					</div>
					<button class="btn" :disabled="!validator.btn" @click.prevent="createUser">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	</Content>
</template>

<script>
import axios from '@nextcloud/axios'
import Content from '@nextcloud/vue/dist/Components/Content'
import Avatar from '@nextcloud/vue/dist/Components/Avatar'
import { showError } from '@nextcloud/dialogs'
import { generateUrl } from '@nextcloud/router'

export default {
	name: 'CreateUser',
	components: {
		Content,
		Avatar,
	},

	data() {
		return {
			email: '',
			pass: '',
			passConfirm: '',
			pfx: '',
			sizeAvatar: 100,
			validator: {
				name: false,
				pass: false,
				passConfirm: false,
				pfx: false,
				btn: false,
			},
			tooltip: {
				name: false,
				nameFocus: false,
				pass: false,
				passFocus: false,
				passConfirm: false,
				passConfirmFocus: false,

			},
		}
	},
	watch: {
		email() {
			this.validationName()
			this.validationBtn()
		},
		pass() {
			this.validationPass()
			this.validationPasswords()
			this.validationBtn()
		},
		passConfirm() {
			this.validationPassConfirm()
			this.validationPasswords()
			this.validationBtn()
		},
		pfx() {
			this.validationPfx()
			this.validationBtn()
		},
	},
	created() {
		this.changeSizeAvatar()
	},

	methods: {
		async createUser() {
			// eslint-disable-next-line
// console.log(this.$)
			try {
				const response = await axios.post(generateUrl(`/apps/libresign/api/0.1/account/create/${this.$route.params.uuid}`), {
					email: this.email,
					password: this.pass,
					signPassword: this.pfx,
				})
				// eslint-disable-next-line
				console.log(response)
			} catch (err) {
				showError(err)
			}
		},

		changeSizeAvatar() {
			screen.width >= 534 ? this.sizeAvatar = 150 : this.sizeAvatar = 100
		},

		validationName() {
			if (this.email.length < 3) {
				this.validator.name = true
				if (this.tooltip.nameFocus === false) {
					this.tooltip.name = true
				} else {
					this.tooltip.name = false
					this.tooltip.name = false
				}
			} else {
				this.validator.name = false
				this.tooltip.name = false
			}
		},
		validationPass() {
			if (this.pass.length < 8) {
				this.validator.pass = true
				if (this.tooltip.passFocus === false) {
					this.tooltip.pass = true
				} else {
					this.tooltip.pass = false
				}
			} else {
				this.validator.pass = false
				this.tooltip.pass = false
			}
			if (this.pass.length > 0 && this.passConfirm.length > 0 && this.pass !== this.passConfirm) {
				this.validator.pass = true
				this.validator.passConfirm = true
			} else {
				this.validator.pass = false
				this.validator.passConfirm = false
			}
		},
		validationPassConfirm() {
			if (this.passConfirm.length < 8) {
				this.validator.passConfirm = true
			} else {
				this.validator.passConfirm = false
				this.validator.pass = false
			}
		},
		validationPfx() {
			if (this.pfx.length < 3) {
				this.validator.pfx = true
			} else {
				this.validator.pfx = false
			}
		},
		validationPasswords() {
			if (this.pass !== this.passConfirm) {
				this.validator.pass = true
				this.validator.passConfirm = true
				if (this.tooltip.passConfirmFocus === false && this.tooltip.passFocus === false) {
					this.tooltip.passConfirm = true
				} else {
					this.tooltip.passConfirm = false
				}
			} else {
				this.validator.pass = false
				this.validator.passConfirm = false
			}
		},
		validationBtn() {
			if (this.validator.name === false && this.validator.passConfirm === false && this.validator.pfx === false) {
				if (this.email.length > 2 && this.passConfirm.length > 2 && this.pfx.length > 2) {
					this.validator.btn = true
				} else {
					this.validator.btn = false
				}
			} else {
				this.validator.btn = false
			}
		},
	},
}
</script>

<style lang="scss" scoped>
#container{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
}

#avatar{
	margin-bottom: 20px;
}

#password{
	margin-right: 3px;
}

form{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	margin: 10px 0px 10px 0px;
}

form > div{
	width: 100%;
}

input {
	min-width: 317px;
	width: 100%
}

#tooltip{
	position: relative;

	span{
		width: 160px;
		padding: 8px;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 500;
		opacity: 0;
		transition: opacity 0.4s;
		visibility: visible;

		position: absolute;
		bottom: calc(100% + 12px);
		left: 50%;
	}
}

.group{
	display: flex;
}

.btn{
	margin-top: 10px;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.bg{
	display: flex;
	justify-content: center;
	background-image: linear-gradient(40deg, #0082c9 0%, #1cafff 100%);
	width: 400px;
	border-radius: 5px;
	box-shadow: rgba(0, 130, 201, 0.4) 5px 5px, rgba(0, 130, 201, 0.3) 10px 10px, rgba(0, 130, 201, 0.2) 15px 15px, rgba(0, 130, 201, 0.1) 20px 20px, rgba(0, 130, 201, 0.05) 25px 25px;

	transition: all;
	transition-duration: 1s;
}

.jumbotron{
	background-image: url('../../img/bg.jpg');
	background-size: cover;

	transition: background-position-x;
	transition-duration: 2s;
}

@media screen and (max-width: 750px) {
	.jumbotron{
		background-position-x: 50%
	}
}

@media screen and (max-width: 535px) {
	// form {width: 90%}
	.bg{
		transition: all;
		transition-duration: 1s;
		width: 99%;
	}
	input {
		max-width: 90%
	}
}

@media screen and (max-width: 380px) {
	.bg{
		transition: all;
		transition-duration: 2s;
		background-image: none;
		background-color: #0082c9;
		border-radius: 0;
		width: 100%;
		box-shadow: none;
	}
	.jumbotron{
		background-image:none;
		background-color:#0082c9;
	}
	input{
		max-width: 317px;
	}
}
</style>