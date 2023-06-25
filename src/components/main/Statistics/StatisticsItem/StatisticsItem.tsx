import { Box, Grid, Typography } from "@mui/material";

type StatisticsItemProps = {
	image: string;
	title: string;
	value: number;
};

export const StatisticsItem = ({
	image,
	title,
	value,
}: StatisticsItemProps) => {
	return (
		<Grid item xs={12} md={6} lg={3}>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				gap="20px"
			>
				<img src={image} alt={title} style={{ display: "block" }} />

				<Box>
					<Typography
						variant="subtitle1"
						sx={{
							fontSize: "46px",
							fontWeight: 800,
							lineHeight: "46px",
							letterSpacing: 0,
							color: "#FFFFFF",
						}}
					>
						{value}+
					</Typography>

					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 400,
							lineHeight: "26px",
							letterSpacing: 0,
							color: "#FFFFFF",
						}}
					>
						{title}
					</Typography>
				</Box>
			</Box>
		</Grid>
	);
};
