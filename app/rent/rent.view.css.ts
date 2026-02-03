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
			maxWidth: '787px',
			margin: {
				left: 'auto',
				right: 'auto',
			},
		},

		Apartments: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: '1.5rem',
		},

		'@media': {
			'screen and (max-width: 900px)': {
				Apartments: {
					gridTemplateColumns: 'repeat(2, 1fr)',
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
