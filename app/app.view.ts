namespace $.$$ {
	interface ApartmentData {
		id: string
		district: string
		rooms: string
		photo: string
		area: string
		floor: string
		price: string
		price_value: number
	}

	export class $bog_bzrl_app extends $.$bog_bzrl_app {
		@$mol_mem
		tab(next?: string): string {
			if (next !== undefined) {
				$mol_state_session.value<string>(`${this}.tab()`, next)
				if (this.section()) this.section(next)
				return next
			}
			const section = this.section()
			if (section === 'let') return 'let'
			if (section && section !== 'let') return 'rent'
			return $mol_state_session.value<string>(`${this}.tab()`) ?? 'rent'
		}

		@$mol_mem
		section(next?: string | null) {
			return this.$.$mol_state_arg.value('section', next) ?? ''
		}

		section_visible(section: string) {
			const current = this.section()
			return !current || current === section
		}

		@$mol_mem
		filter_district(next?: string) {
			if (next !== undefined) this.filter_applied(false)
			return $mol_state_session.value(`${this}.filter_district()`, next) || 'all'
		}

		@$mol_mem
		filter_rooms(next?: string) {
			if (next !== undefined) this.filter_applied(false)
			return $mol_state_session.value(`${this}.filter_rooms()`, next) || 'studio'
		}

		@$mol_mem
		filter_price(next?: string) {
			if (next !== undefined) this.filter_applied(false)
			return $mol_state_session.value(`${this}.filter_price()`, next) || ''
		}

		@$mol_mem
		filter_applied(next?: boolean) {
			return $mol_state_session.value(`${this}.filter_applied()`, next) ?? false
		}

		@$mol_mem
		apartments_data(): ApartmentData[] {
			return [
				{
					id: '1',
					district: 'vahitovsky',
					rooms: 'studio',
					photo: 'https://picsum.photos/400/300?random=1',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '36 000 ₽/мес',
					price_value: 36000,
				},
				{
					id: '2',
					district: 'sovetsky',
					rooms: 'r2',
					photo: 'https://picsum.photos/400/300?random=2',
					area: 'квартира 42,8 м²',
					floor: '3/5 эт.',
					price: '42 000 ₽/мес',
					price_value: 42000,
				},
				{
					id: '3',
					district: 'novo_savinovsky',
					rooms: 'studio',
					photo: 'https://picsum.photos/400/300?random=3',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '36 000 ₽/мес',
					price_value: 36000,
				},
				{
					id: '4',
					district: 'vahitovsky',
					rooms: 'r1',
					photo: 'https://picsum.photos/400/300?random=4',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '36 000 ₽/мес',
					price_value: 36000,
				},
				{
					id: '5',
					district: 'sovetsky',
					rooms: 'r3',
					photo: 'https://picsum.photos/400/300?random=5',
					area: 'квартира 42,8 м²',
					floor: '3/5 эт.',
					price: '42 000 ₽/мес',
					price_value: 42000,
				},
				{
					id: '6',
					district: 'novo_savinovsky',
					rooms: 'r2',
					photo: 'https://picsum.photos/400/300?random=6',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '35 000 ₽/мес',
					price_value: 35000,
				},
				{
					id: '7',
					district: 'vahitovsky',
					rooms: 'r4',
					photo: 'https://picsum.photos/400/300?random=7',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '35 000 ₽/мес',
					price_value: 35000,
				},
				{
					id: '8',
					district: 'sovetsky',
					rooms: 'studio',
					photo: 'https://picsum.photos/400/300?random=8',
					area: 'квартира 42,8 м²',
					floor: '3/5 эт.',
					price: '42 000 ₽/мес',
					price_value: 42000,
				},
				{
					id: '9',
					district: 'novo_savinovsky',
					rooms: 'r1',
					photo: 'https://picsum.photos/400/300?random=9',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '36 000 ₽/мес',
					price_value: 36000,
				},
			]
		}

		@$mol_mem
		apartment_rows() {
			return this.apartments_filtered().map(apt => this.Apartment(apt.id))
		}

		@$mol_mem_key
		apartment_data(id: string) {
			return this.apartments_data().find(a => a.id === id)!
		}

		@$mol_mem_key
		apartment_district(id: string) {
			return this.apartment_data(id).district
		}

		@$mol_mem_key
		apartment_photo(id: string) {
			return this.apartment_data(id).photo
		}

		@$mol_mem_key
		apartment_area(id: string) {
			return this.apartment_data(id).area
		}

		@$mol_mem_key
		apartment_floor(id: string) {
			return this.apartment_data(id).floor
		}

		@$mol_mem_key
		apartment_price(id: string) {
			return this.apartment_data(id).price
		}

		@$mol_mem
		apartments_filtered() {
			const data = this.apartments_data()
			if (!this.filter_applied()) return data

			const district = this.filter_district()
			const rooms = this.filter_rooms()
			const price_from = this.parse_price(this.filter_price())

			return data.filter(apt => {
				if (district !== 'all' && apt.district !== district) return false
				if (rooms && apt.rooms !== rooms) return false
				if (price_from !== null && apt.price_value < price_from) return false
				return true
			})
		}

		@$mol_action
		apartments_search() {
			this.filter_applied(true)
		}

		@$mol_action
		promo_action() {
			this.tab('rent')
			this.section('rent')
			this.filter_applied(true)
		}

		@$mol_action
		let_action() {
			this.section('let')
		}

		Rent_section() {
			if (!this.section_visible('rent')) return null!
			return this.tab() === 'rent' ? super.Rent_section() : null!
		}

		Let_section() {
			if (!this.section_visible('let')) return null!
			return this.tab() === 'let' ? super.Let_section() : null!
		}

		How_it_works() {
			return this.section_visible('how') ? super.How_it_works() : null!
		}

		Privacy() {
			return this.section_visible('privacy') ? super.Privacy() : null!
		}

		Benefits() {
			return this.section_visible('benefits') ? super.Benefits() : null!
		}

		Team() {
			return this.section_visible('team') ? super.Team() : null!
		}

		Footer() {
			return this.section_visible('contact') ? super.Footer() : null!
		}

		private parse_price(value: string) {
			const normalized = value.replace(/[^\d]/g, '')
			if (!normalized) return null
			return Number(normalized)
		}
	}
}
