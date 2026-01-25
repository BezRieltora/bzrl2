namespace $.$$ {
	$mol_style_define($bog_bzrl_app_profile, {
		Button: {
			padding: 0,
			border: {
				radius: '50%',
			},
		},

		Avatar: {
			border: {
				radius: '50%',
			},
			objectFit: 'cover',
			display: 'block',
		},

		Panel: {
			zIndex: 1000,
			maxWidth: '100vw',
		},

		Card: {
			minWidth: '20rem',
			maxWidth: '24rem',
			boxSizing: 'border-box',
		},

		Header: {
			display: 'flex',
			flexDirection: 'column',
			gap: $mol_gap.text,
			padding: $mol_gap.block,
		},

		Header_top: {
			display: 'flex',
			flexDirection: 'row',
			gap: $mol_gap.text,
			alignItems: 'flex-start',
			justifyContent: 'space-between',
		},

		Avatar_large: {
			width: '4rem',
			height: '4rem',
			padding: 0,
			overflow: 'hidden',
			border: {
				radius: '50%',
			},
		},

		Name: {
			font: {
				size: '1.25rem',
				weight: 'bold',
			},
		},

		Id: {
			wordBreak: 'break-all',
		},

		Bio: {
			display: 'flex',
			gap: $mol_gap.text,
			padding: $mol_gap.block,
			alignItems: 'center',
		},

		Bio_icon: {
			flexShrink: '0',
		},

		Divider_1: {
			height: '1px',
			background: {
				color: $mol_theme.line,
			},
		},

		Divider_2: {
			height: '1px',
			background: {
				color: $mol_theme.line,
			},
		},

		Divider_3: {
			height: '1px',
			background: {
				color: $mol_theme.line,
			},
		},

		Menu_profile: {
			justifyContent: 'flex-start',
		},

		Menu_repos: {
			justifyContent: 'flex-start',
		},

		Menu_stars: {
			justifyContent: 'flex-start',
		},

		Menu_gists: {
			justifyContent: 'flex-start',
		},

		Menu_settings: {
			justifyContent: 'flex-start',
		},
	})
}
