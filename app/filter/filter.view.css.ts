namespace $.$$ {
	$mol_style_define($bog_bzrl_app_filter, {
		display: 'flex',
		flex: {
			wrap: 'wrap',
		},
		align: {
			items: 'stretch',
		},
		gap: $mol_gap.block,

		District_block: {
			display: 'flex',
			align: {
				items: 'center',
			},
			flex: {
				grow: 3,
				shrink: 1,
				basis: '30rem',
			},
			padding: {
				left: '1.6rem',
				right: '1.6rem',
			},
			minHeight: '5.5rem',
			border: {
				radius: $bog_bzrl_app_gap.roundMore,
			},
			background: {
				color: $bog_theme.background,
			},
		},

		Rooms_block: {
			display: 'flex',
			align: {
				items: 'center',
			},
			flex: {
				grow: 2,
				shrink: 1,
				basis: '22rem',
			},
			padding: {
				left: '1.6rem',
				right: '1.6rem',
			},
			minHeight: '5.5rem',
			border: {
				radius: $bog_bzrl_app_gap.roundMore,
			},
			background: {
				color: $bog_theme.background,
			},
		},

		Price_block: {
			display: 'flex',
			align: {
				items: 'center',
			},
			flex: {
				grow: 1,
				shrink: 1,
				basis: '18rem',
			},
			padding: {
				left: '1.2rem',
				right: '1.2rem',
			},
			minHeight: '5.5rem',
			border: {
				radius: $bog_bzrl_app_gap.roundMore,
			},
			background: {
				color: $bog_theme.background,
			},
		},

		District: {
			width: '100%',
			align: {
				self: 'stretch',
			},
			Trigger: {
				flex: {
					grow: 1,
				},
				justify: {
					content: 'space-between',
				},
				boxShadow: 'none',
				background: {
					color: 'transparent',
				},
			},
		},

		District_icon: {
			margin: {
				left: 'auto',
			},
			flex: {
				shrink: 0,
			},
		},

		Rooms: {
			flex: {
				grow: 1,
			},
			justify: {
				content: 'space-between',
			},
			$mol_check: {
				background: {
					color: 'transparent',
				},
				boxShadow: 'none',
			},
		},

		Price_from: {
			background: {
				color: 'transparent',
			},
			boxShadow: 'none',
			flex: {
				grow: 1,
			},
			padding: {
				left: '.6rem',
				right: '.6rem',
			},
		},
	})
}
