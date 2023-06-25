import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { AppButton } from "components/ui";

type SideOfferProps = {
	title: string;
	image: string;
	imagePlace: "center" | "bottom";
};

export const SideOffer = ({ image, title, imagePlace }: SideOfferProps) => {
	const theme = useTheme();
	const isDownSM = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box
			sx={{ background: "#FFDA47" }}
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			height="235px"
			borderRadius="5px"
			gap="30px"
		>
			<Box p={isDownSM ? "20px" : "30px"}>
				<Typography
					component="h3"
					variant="h3"
					sx={{
						color: "#0E081E",
						fontSize: "30px",
						fontWeight: 800,
						lineHeight: "36px",
						letterSpacing: 0,
						mb: "35px",
					}}
				>
					{title}
				</Typography>

				<AppButton>Shop Now</AppButton>
			</Box>

			{!isDownSM && (
				<Box width="260px" height="100%" position="relative">
					<Box
						component="img"
						src={image}
						alt="Dog"
						position="absolute"
						right={0}
						bottom={imagePlace === "center" ? "50%" : 0}
						sx={{
							transform: imagePlace === "center" ? "translateY(50%)" : "none",
						}}
					/>
				</Box>
			)}
		</Box>
	);
};
