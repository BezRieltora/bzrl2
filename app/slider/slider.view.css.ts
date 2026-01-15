namespace $.$$ {
	$mol_style_define($bog_bzrl_app_slider, {
		position: 'relative',
		overflow: 'hidden',
		border: {
			radius: $mol_gap.round,
		},

		Slides: {
			width: '100%',
		},

		Slide: {
			width: '100%',
			height: '400px',
			objectFit: 'cover',
		},

		Prev: {
			position: 'absolute',
			left: $mol_gap.block,
			top: '50%',
			transform: 'translateY(-50%)',
			background: {
				color: '#ffffffe6' as any,
			},
			border: {
				radius: '50%',
			},
			width: '3rem',
			height: '3rem',
			zIndex: 1,
		},

		Next: {
			position: 'absolute',
			right: $mol_gap.block,
			top: '50%',
			transform: 'translateY(-50%)',
			background: {
				color: '#ffffffe6' as any,
			},
			border: {
				radius: '50%',
			},
			width: '3rem',
			height: '3rem',
			zIndex: 1,
		},

		Dots: {
			position: 'absolute',
			bottom: $mol_gap.block,
			left: '50%',
			transform: 'translateX(-50%)',
			display: 'flex',
			gap: $mol_gap.text,
		},

		Dot: {
			width: '.625rem',
			height: '.625rem',
			padding: 0,
			border: {
				radius: '50%',
			},
			background: {
				color: '#ffffff80' as any,
			},
			cursor: 'pointer',
		},

		'@': {
			bog_bzrl_app_slider_dot_active: {
				true: {
					Dot: {
						background: {
							color: '#CDDC39',
						},
					},
				},
			},
		},
	})
}
