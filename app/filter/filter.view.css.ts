namespace $.$$ {
	$mol_style_define($bog_bzrl_app_filter, {
		display: 'flex',
		minHeight: '4rem',
		flexWrap: 'wrap',
		align: {
			items: 'stretch',
		},
		gap: $mol_gap.block,

		District_block: {
			display: 'flex',
			align: {
				items: 'center',
			},
			maxHeight: '4rem',
			border: {
				radius: $bog_bzrl_app_gap.roundMore,
			},
			background: {
				color: $bog_theme.background,
			},
		},

		Rooms_block: {
			maxHeight: '4rem',
			display: 'flex',
			align: {
				items: 'center',
			},
			padding: {
				left: '1.6rem',
				right: '1.6rem',
			},
			border: {
				radius: $bog_bzrl_app_gap.roundMore,
			},
			background: {
				color: $bog_theme.background,
			},
		},

		Price_block: {
			maxHeight: '4rem',
			display: 'flex',
			align: {
				items: 'center',
			},
			padding: {
				left: '1.2rem',
				right: '1.2rem',
			},
			border: {
				radius: $bog_bzrl_app_gap.roundMore,
			},
			background: {
				color: $bog_theme.background,
			},
		},

		Search_block: {
			maxHeight: '4rem',
			display: 'flex',
			flex: {
				grow: 2,
				shrink: 1,
				basis: '18rem',
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
				margin: {
					top: '.5rem',
				},
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
				align: {
					items: 'stretch',
				},
			},
			Option_row: {
				width: '100%',
				align: {
					items: 'center',
				},
				justify: {
					content: 'center',
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
				width: 'auto',
				textAlign: 'left',
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

		Search: {
			width: '100%',
			height: '100%',
			justify: {
				content: 'center',
			},
			background: {
				color: $mol_theme.control,
			},
			color: '#4c4c4c',
			border: {
				radius: $bog_bzrl_app_gap.roundMore,
			},
			boxShadow: 'none',
		},
	})
}
