namespace $.$$ {
	export class $bog_bzrl_app_profile extends $.$bog_bzrl_app_profile {
		@$mol_action
		toggle() {
			this.opened(!this.opened())
		}

		@$mol_mem
		profile_entity() {
			return this.$.$giper_baza_glob.home().land().Node($bog_bzrl_baza_profile).Data()
		}

		@$mol_mem
		profile_id() {
			return `ID: ${this.profile_entity().link().str}`
		}

		protected default_avatar_uri() {
			return '/bog/bzrl/assets/HomeRent-Design-System-Frame-69.png'
		}

		@$mol_mem
		avatar_uri() {
			const profile = this.profile_entity()
			const data = profile.Photo()?.val() ?? ''
			if (!data) return this.default_avatar_uri()
			const mime = profile.PhotoType()?.val() ?? 'image/*'
			return `data:${mime};base64,${data}`
		}

		navigate_profile() {}
		navigate_repos() {}
		navigate_stars() {}
		navigate_gists() {}
		navigate_settings() {}
	}
}
