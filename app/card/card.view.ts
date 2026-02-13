namespace $.$$ {
	export class $bog_bzrl_app_card extends $.$bog_bzrl_app_card {
		district_title() {
			const districts: Record<string, string> = {
				vahitovsky: 'Вахитовский',
				sovetsky: 'Советский',
				novo_savinovsky: 'Ново-Савиновский',
			}
			return districts[this.district()] ?? this.district()
		}

		details_text() {
			return `${this.area()} , ${this.floor()}`
		}
	}
}
