namespace $.$$ {
	$mol_style_define($bog_bzrl_app, {
		maxWidth: 'none',
		margin: 'auto',

		Head: {
			justify: {
				content: 'space-between',
			},
			align: {
				items: 'center',
			},
			gap: '2rem',
		},

		Logo: {
			font: {
				size: '1.5rem',
				weight: 700,
			},
		},

		Tabs: {
			background: {
				color: '#f5f5f5',
			},
			border: {
				radius: '2rem',
			},
			padding: $mol_gap.text,
		},

		Body: {
			flex: {
				direction: 'column',
			},
			gap: '3rem',
			padding: '2rem',
		},

		Rent_section: {
			flex: {
				direction: 'column',
			},
			gap: '2rem',
		},

		Let_section: {
			flex: {
				direction: 'column',
			},
			gap: '2rem',
		},

		Title_section: {
			font: {
				size: '2rem',
				weight: 600,
			},
			textAlign: 'center',
		},

		Apartments: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: '1.5rem',
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
			border: {
				radius: $mol_gap.round,
			},
			overflow: 'hidden',
		},

		Privacy_content: {
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			padding: '2rem',
			background: {
				image: 'linear-gradient(transparent, #000000cc)' as any,
			},
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
