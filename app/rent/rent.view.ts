namespace $.$$ {
	export class $bog_bzrl_app_rent extends $.$bog_bzrl_app_rent {
		@$mol_mem
		apartment_rows() {
			return this.apartment_ids().map(id => this.Apartment(id))
		}

		@$mol_mem
		apartment_ids() {
			return this.apartments().map(apartment => apartment.id)
		}

		@$mol_mem_key
		apartment_data(id: string) {
			return this.apartments().find(apartment => apartment.id === id)!
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
	}
}
