import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Info = () => {
	const theme = useTheme();
	const isXS = useMediaQuery(theme.breakpoints.only("xs"));

	return (
		<Box maxWidth="633px" mb="3.125rem">
			<Typography
				variant="subtitle1"
				sx={{
					fontSize: "1rem",
					fontWeight: 700,
					lineHeight: "19px",
					letterSpacing: 0,
					color: theme.palette.primary.main,
					mb: "1.1875rem",
				}}
			>
				We care for your pets
			</Typography>

			<Typography
				variant="h1"
				sx={{
					fontSize: !isXS ? "68px" : "32px",
					fontWeight: 800,
					lineHeight: !isXS ? "71px" : "45px",
					letterSpacing: 0,
					color: "#0E081E",
					mb: "1.25rem",
				}}
			>
				We Help You Care for Animals with Nutrition
			</Typography>

			<Typography
				variant="body1"
				sx={{
					fontSize: "18px",
					fontWeight: 400,
					lineHeight: "26px",
					letterSpacing: 0,
					color: "#1C103B",
					maxWidth: "530px",
				}}
			>
				All offers are subject to availability. Ut tortor pretium viverra
				suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at.
				Potenti nullam ac tortor vitae purus faucibus ornare.
			</Typography>
		</Box>
	);
};
