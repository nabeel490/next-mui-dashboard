import { Box } from '@mui/material';
import React from 'react';
import HorizontalAppBar from './HorizontalAppBar/HorizontalAppBar';
import VerticalAppBar from './VerticalAppBar/VerticalAppBar';

const Navbar = ({ children }) => {
	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
				<VerticalAppBar />
				<Box sx={{ flexGrow: 1 }}>
					<HorizontalAppBar />
					<Box>{children}</Box>
				</Box>
			</Box>
		</>
	);
};

export default Navbar;