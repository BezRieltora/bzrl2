namespace $.$$ {
	$mol_style_define($bog_bzrl_app_nav, {
		display: 'flex',
		align: {
			items: 'center',
		},
		gap: '1.5rem',
		backgroundColor: '#f5f5f5',
		borderRadius: '2rem',
		padding: '5px',

		Rent_button: {
			background: {
				color: '#8BC34A',
			},
			border: {
				radius: '2rem',
			},
			padding: {
				top: '0.75rem',
				bottom: '0.75rem',
				left: '2rem',
				right: '2rem',
			},
			font: {
				size: '1rem',
				weight: 500,
			},
			color: 'white',
			textDecoration: 'none',
			cursor: 'pointer',
			transition: 'all 0.2s',
			':hover': {
				background: {
					color: '#7CB342',
				},
			},
		},

		Let_link: {
			font: {
				size: '1rem',
				weight: 400,
			},
			color: '#666',
			textDecoration: 'none',
			cursor: 'pointer',
			transition: 'color 0.2s',
			background: {
				color: 'transparent',
			},
			border: {
				width: 0,
			},
			padding: {
				left: 0,
				right: 0,
			},
			':hover': {
				color: '#333',
				background: {
					color: 'transparent',
				},
			},
		},

		Home_icon: {
			width: '2.5rem',
			height: '2.5rem',
			border: {
				radius: '50%',
			},
			display: 'flex',
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
			background: {
				color: 'transparent',
			},
			cursor: 'pointer',
			transition: 'background 0.2s',
			padding: 0,
			':hover': {
				background: {
					color: '#f5f5f5',
				},
			},
		},

		home_icon_img: {
			width: '1.5rem',
			height: '1.5rem',
		},
	})
}
