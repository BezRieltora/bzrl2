namespace $.$$ {
	export class $bog_bzrl_app_profile extends $.$bog_bzrl_app_profile {
		@$mol_action
		toggle() {
			this.opened(!this.opened())
		}

		@$mol_mem
		profile_entity() {
			return this.$.$giper_baza_glob.home().land().Data($bog_bzrl_baza_profile)
		}

		protected profile_text(
			ensure: (profile: $bog_bzrl_baza_profile) => $giper_baza_atom_text | null,
			next?: string,
			fallback?: string,
		) {
			const profile = this.profile_entity()
			const atom = ensure(profile)
			if (!atom) return fallback ?? ''

			if (next !== undefined) {
				atom.val(next)
				return next
			}

			return atom.val() ?? fallback ?? ''
		}

		@$mol_mem
		name(next?: string) {
			return this.profile_text(profile => profile.Name(next === undefined ? undefined : null), next, super.name())
		}

		@$mol_mem
		profile_id() {
			return `ID: ${this.profile_entity().link().str}`
		}

		protected default_avatar_uri() {
			return './bog/bzrl/assets/HomeRent-Design-System-Frame-69.png'
		}

		@$mol_mem
		avatar_uri() {
			const profile = this.profile_entity()
			const file = profile.PhotoFile()?.remote() ?? null
			if (!file) return this.default_avatar_uri()
			return this.$.$mol_dom_context.URL.createObjectURL(file.blob())
		}

		navigate_profile() {}
		navigate_repos() {}
		navigate_stars() {}
		navigate_gists() {}
		navigate_settings() {}
	}
}
