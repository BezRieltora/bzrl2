namespace $.$$ {
	export class $bog_bzrl_app_slider extends $.$bog_bzrl_app_slider {
		@$mol_mem
		slides_data() {
			return [
				'https://picsum.photos/800/400?random=20',
				'https://picsum.photos/800/400?random=21',
				'https://picsum.photos/800/400?random=22',
				'https://picsum.photos/800/400?random=23',
			]
		}

		@$mol_mem
		current_index(next?: number) {
			if (next !== undefined) return next
			return 0
		}

		@$mol_action
		prev() {
			const current = this.current_index()
			const total = this.slides_data().length
			this.current_index((current - 1 + total) % total)
		}

		@$mol_action
		next() {
			const current = this.current_index()
			const total = this.slides_data().length
			this.current_index((current + 1) % total)
		}

		@$mol_mem
		current_slide_uri() {
			this.autoplay_task()
			return this.slides_data()[this.current_index()] ?? ''
		}

		@$mol_mem
		autoplay_task() {
			if (this.slides_data().length < 2) return null
			this.current_index()
			return new this.$.$mol_after_timeout(this.autoplay_delay(), () => this.next())
		}

		autoplay_delay() {
			return 5000
		}

		@$mol_mem
		dots() {
			return this.slides_data().map((_, i) => this.Dot(i))
		}

		@$mol_mem_key
		dot_active(index: number) {
			return index === this.current_index()
		}

		@$mol_action
		dot_select(index: number) {
			this.current_index(index)
		}
	}
}
