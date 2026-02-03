namespace $.$$ {
	export class $bog_bzrl_app_profile_avatar extends $.$bog_bzrl_app_profile_avatar {
		@$mol_mem
		profile(next?: $bog_bzrl_baza_profile | null) {
			if (next !== undefined) return next
			return this.$.$giper_baza_glob.home().land().Data($bog_bzrl_baza_profile)
		}

		accept() {
			return 'image/*'
		}

		multiple() {
			return false
		}

		protected default_uri() {
			return './bog/bzrl/assets/HomeRent-Design-System-Frame-69.png'
		}

		@$mol_mem
		private_photo_file() {
			const profile = this.profile()
			if (!profile) return null
			return profile.PhotoFile()?.remote() ?? null
		}

		@$mol_mem
		image_uri() {
			const file = this.private_photo_file()
			if (!file) return this.default_uri()
			const url = this.$.$mol_dom_context.URL.createObjectURL(file.blob())
			return url
		}

		@$mol_action
		files(next?: readonly File[]) {
			if (!this.enabled()) return []
			if (!next?.length) return []

			const profile = this.profile()
			if (!profile) return []

			const file = next[0]
			const store = profile.PhotoFile(null)!.ensure(null)
			if (store) {
				store.blob(file)
				profile.PhotoFile(null)!.remote(store)
			}

			return []
		}
	}
}
