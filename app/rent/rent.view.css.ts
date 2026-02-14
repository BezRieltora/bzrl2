namespace $.$$ {
	$mol_style_define($bog_bzrl_app_rent, {
		display: 'flex',
		flex: {
			direction: 'column',
		},
		gap: '2rem',

		Title_section: {
			font: {
				family: 'PT Root UI, sans-serif',
				size: '4rem',
				weight: 700,
			},
			lineHeight: '1',
			letterSpacing: '-0.03em',
			textAlign: 'center',
			color: '#4C4C4C',
			maxWidth: '850px',
			margin: {
				left: 'auto',
				right: 'auto',
			},
		},

		Apartments: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: '1rem',
		},

		How_it_works: {
			flex: {
				direction: 'column',
			},
			gap: '2rem',
		},

		How_title: {
			font: {
				size: '1.75rem',
				weight: 600,
			},
		},

		Steps: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: '1.5rem',
		},

		Privacy: {
			position: 'relative',
			display: 'grid',
			gridTemplateAreas: '"stack"',
			border: {
				radius: $mol_gap.round,
			},
			overflow: 'hidden',
		},

		Privacy_slider: {
			gridArea: 'stack',
			zIndex: 0,
		},

		Privacy_content: {
			gridArea: 'stack',
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '3rem',
			textAlign: 'center',
			pointerEvents: 'none',
			zIndex: 1,
		},

		Benefits: {
			flex: {
				direction: 'column',
			},
			gap: '2rem',
		},

		Benefits_title: {
			font: {
				size: '1.75rem',
				weight: 600,
			},
		},

		Benefits_list: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: '1.5rem',
		},

		'@media': {
			'screen and (max-width: 900px)': {
				Apartments: {
					gridTemplateColumns: 'repeat(2, 1fr)',
				},
				Steps: {
					gridTemplateColumns: '1fr',
				},
				Benefits_list: {
					gridTemplateColumns: '1fr',
				},
			},
			'screen and (max-width: 600px)': {
				Apartments: {
					gridTemplateColumns: '1fr',
				},
			},
		},
	})
}
