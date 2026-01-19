namespace $.$$ {
	$mol_style_define($bog_bzrl_app_hero, {
		padding: '3rem',
		border: {
			radius: $mol_gap.round,
		},
		background: {
			color: $mol_theme.card,
		},

		Content: {
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.block,
			maxWidth: '500px',
		},

		Title: {
			font: {
				size: '2rem',
				weight: 600,
			},
			lineHeight: '1.2',
		},

		Description: {
			color: $mol_theme.shade,
		},

		Action: {
			align: {
				self: 'flex-start',
			},
			border: {
				style: 'solid',
				width: '1px',
				color: $mol_theme.line,
				radius: '2rem',
			},
			padding: [$mol_gap.block, '1.5rem'],
		},

		'@': {
			bog_bzrl_app_hero_variant: {
				promo: {
					background: {
						// Keep a visual background without relying on a missing asset.
						image: 'linear-gradient(135deg, #ffe4b5 0%, #ffb347 100%)' as any,
						size: ['cover'] as any,
						position: 'center',
					},
				},
				privacy: {
					background: {
						color: '#1a1a2e',
					},
					color: '#fff',
					textAlign: 'center',
					Content: {
						maxWidth: '600px',
						margin: 'auto',
					},
				},
			},
		},
	})

	$mol_style_define($bog_bzrl_app_hero_team, {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '2rem',
		padding: '2rem',

		Photo: {
			width: '100%',
			height: '400px',
			objectFit: 'cover',
			border: {
				radius: $mol_gap.round,
			},
		},

		Content: {
			flex: {
				direction: 'column',
			},
			justify: {
				content: 'center',
			},
			gap: $mol_gap.block,
		},

		Title: {
			font: {
				size: '2rem',
				weight: 600,
			},
		},

		Description: {
			color: $mol_theme.shade,
		},
	})
}
