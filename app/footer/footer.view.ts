namespace $.$$ {
	export class $bog_bzrl_app_footer extends $.$bog_bzrl_app_footer {
		section_link(section: string | null) {
			return this.$.$mol_state_arg.link({ section })
		}

		nav_home_link() {
			return this.section_link(null)
		}

		nav_profile_link() {
			return this.section_link('contact')
		}

		nav_all_link() {
			return this.section_link('rent')
		}

		nav_rent_link() {
			return this.section_link('let')
		}

		nav_get_link() {
			return this.section_link('rent')
		}

		nav_districts_link() {
			return this.section_link('rent')
		}

		nav_new_link() {
			return this.section_link('rent')
		}

		nav_furnished_link() {
			return this.section_link('rent')
		}

		nav_pets_link() {
			return this.section_link('rent')
		}

		nav_studio_link() {
			return this.section_link('rent')
		}

		nav_privacy_link() {
			return this.section_link('privacy')
		}

		nav_terms_link() {
			return this.section_link('privacy')
		}

		nav_consent_link() {
			return this.section_link('privacy')
		}

		nav_cookies_link() {
			return this.section_link('privacy')
		}
	}
}
