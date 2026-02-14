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
			height: '100%',
			align: {
				self: 'stretch',
			},
			Trigger: {
				width: '100%',
				height: '100%',
				flex: {
					grow: 1,
				},
				justify: {
					content: 'space-between',
				},
				padding: {
					left: '1.6rem',
					right: '1.6rem',
				},
				boxShadow: 'none',
				background: {
					color: 'transparent',
				},
				color: $mol_theme.text,
				':hover': {
					border: {
						radius: $bog_bzrl_app_gap.roundMore,
					},
				},
			},
			Bubble: {
				border: {
					radius: $bog_bzrl_app_gap.roundMore,
				},
				boxShadow: '0 .4rem 1.2rem #0000001a',
				background: {
					color: $bog_theme.background,
				},
				padding: '.4rem',
				width: 'auto',
			},
			Bubble_pane: {
				background: {
					color: 'transparent',
				},
			},
			Menu: {
				gap: '.2rem',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
			},
			Option_row: {
				width: '100%',
				justify: {
					content: 'flex-start',
				},
				background: {
					color: 'transparent',
				},
				border: {
					radius: $bog_bzrl_app_gap.roundMore,
				},
				padding: {
					left: '.9rem',
					right: '.9rem',
					top: '.65rem',
					bottom: '.65rem',
				},
				color: $mol_theme.text,
				':hover': {
					border: {
						radius: $bog_bzrl_app_gap.roundMore,
					},
					boxShadow: 'inset 0 0 0 100vmax #0000000a',
				},
				':focus-visible': {
					border: {
						radius: $bog_bzrl_app_gap.roundMore,
					},
					boxShadow: 'inset 0 0 0 100vmax #00000010',
				},
			},
			Option_label: {
				padding: 0,
				minHeight: 'unset',
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
