namespace $.$$ {
	$mol_style_define($bog_bzrl_app_card, {
		flex: {
			direction: 'column',
		},
		position: 'relative',

		Badge: {
			position: 'absolute',
			top: $mol_gap.block,
			left: $mol_gap.block,
			padding: [$mol_gap.text, $mol_gap.block],
			border: {
				radius: $mol_gap.round,
			},
			font: {
				size: '.75rem',
				weight: 500,
			},
			zIndex: 1,
			background: {
				color: '#FFF8E1',
			},
			color: '#4C4C4C',
		},

		Checkmark: {
			position: 'absolute',
			top: $mol_gap.block,
			right: $mol_gap.block,
			width: '1.25rem',
			height: '1.25rem',
			border: {
				radius: '50%',
			},
			background: {
				color: '#C8D84F',
			},
			color: '#fff',
			display: 'flex',
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
			font: {
				size: '.625rem',
				weight: 700,
			},
			zIndex: 1,
		},

		Photo: {
			width: '100%',
			height: '220px',
			objectFit: 'cover',
			border: {
				radius: $mol_gap.round,
			},
		},

		Info: {
			padding: [$mol_gap.text, 0],
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.text,
		},

		Details: {
			color: $mol_theme.shade,
			font: {
				size: '.875rem',
			},
		},

		Price: {
			font: {
				weight: 600,
			},
		},
	})
}
