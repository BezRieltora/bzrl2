namespace $.$$ {
	export class $bog_bzrl_app_profile_avatar extends $.$bog_bzrl_app_profile_avatar {
		@$mol_mem
		profile(next?: $bog_bzrl_baza_profile | null) {
			if (next !== undefined) return next
			return this.$.$giper_baza_glob.home().land().Node($bog_bzrl_baza_profile).Data()
		}

		accept() {
			return 'image/*'
		}

		multiple() {
			return false
		}

		protected default_uri() {
			return '/bog/bzrl/assets/HomeRent-Design-System-Frame-69.png'
		}

		@$mol_mem
		private_photo() {
			const profile = this.profile()
			if (!profile) return ''
			return profile.Photo()?.val() ?? ''
		}

		@$mol_mem
		private_photo_type() {
			const profile = this.profile()
			if (!profile) return 'image/*'
			return profile.PhotoType()?.val() ?? 'image/*'
		}

		@$mol_mem
		image_uri() {
			const data = this.private_photo()
			if (!data) return this.default_uri()
			return `data:${this.private_photo_type()};base64,${data}`
		}

		protected encode_base64(buffer: Uint8Array) {
			const chunk = 0x8000
			let binary = ''
			for (let i = 0; i < buffer.length; i += chunk) {
				const slice = buffer.subarray(i, i + chunk)
				binary += String.fromCharCode(...slice)
			}
			return this.$.$mol_dom_context.btoa(binary)
		}

		@$mol_action
		files(next?: readonly File[]) {
			if (!this.enabled()) return []
			if (!next?.length) return []

			const profile = this.profile()
			if (!profile) return []

			const file = next[0]
			const buffer = new Uint8Array(this.$.$mol_wire_sync(file).arrayBuffer())
			profile.Photo(null)!.val(this.encode_base64(buffer))
			profile.PhotoType(null)!.val(file.type || 'image/*')

			return []
		}
	}
}
