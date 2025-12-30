namespace $.$$ {
	$mol_style_define($bog_bzrl_app_profile, {

		Button: {
			padding: 0,
			border: {
				radius: '50%',
			},
		},

		Avatar: {
			width: '2rem',
			height: '2rem',
		},

		Panel: {
			zIndex: 1000,
		},

		Card: {
			minWidth: '20rem',
			maxWidth: '24rem',
		},

		Header: {
			display: 'flex',
			flexDirection: 'column',
			gap: $mol_gap.text,
			padding: $mol_gap.block,
		},

		Avatar_large: {
			width: '4rem',
			height: '4rem',
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

		Bio: {
			display: 'flex',
			gap: $mol_gap.text,
			padding: $mol_gap.block,
			alignItems: 'center',
		},

		Bio_icon: {
			flexShrink: '0',
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
