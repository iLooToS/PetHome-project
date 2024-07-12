'use client'
import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FolderIcon from '@mui/icons-material/Folder'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Footer() {
	const [value, setValue] = React.useState('recents')

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	return (
		<div style={{ position: 'sticky', left: '0', bottom: '0' }}>
			<BottomNavigation
				sx={{ width: 320 }}
				value={value}
				onChange={handleChange}
			>
				<BottomNavigationAction
					label='Favorites'
					value='favorites'
					icon={<FavoriteIcon />}
				/>
				<BottomNavigationAction
					label='Nearby'
					value='nearby'
					icon={<LocationOnIcon />}
				/>
				<BottomNavigationAction
					label='Folder'
					value='folder'
					icon={<FolderIcon />}
				/>
			</BottomNavigation>
		</div>
	)
}
