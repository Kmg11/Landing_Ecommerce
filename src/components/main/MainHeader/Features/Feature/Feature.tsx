import { Box, Grid, Typography } from "@mui/material";

type FeatureProps = {
	title: string;
	subTitle: string;
	icon: React.ReactNode;
};

export const Feature = ({ icon, subTitle, title }: FeatureProps) => {
	return (
		<Grid item xs={12} lg={6} display="flex" gap="15px" alignItems="center">
			{icon}

			<Box>
				<Typography
					variant="h6"
					sx={{
						fontSize: "22px",
						fontWeight: 700,
						lineHeight: "30px",
						letterSpacing: 0,
						color: "#0E081E",
					}}
				>
					{title}
				</Typography>

				<Typography
					variant="body1"
					sx={{
						fontSize: "16px",
						fontWeight: 400,
						lineHeight: "23px",
						letterSpacing: 0,
						color: "#1C103B",
					}}
				>
					{subTitle}
				</Typography>
			</Box>
		</Grid>
	);
};
