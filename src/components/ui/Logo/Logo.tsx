import Box from "@mui/material/Box";
import LogoImage from "assets/images/logo.png";
import { Typography, useTheme } from "@mui/material";

export const Logo = () => {
	const theme = useTheme();

	return (
		<Box display="flex" alignItems="center" gap={2.3}>
			<img src={LogoImage} alt="logo" style={{ display: "block" }} />

			<Typography
				sx={{ color: theme.palette.primary.main }}
				fontWeight={800}
				fontSize="24px"
				lineHeight="18px"
				letterSpacing="0"
			>
				Petopia
			</Typography>
		</Box>
	);
};
