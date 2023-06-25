import {
	Box,
	Typography,
	Button,
	Grid,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { AppButton } from "components/ui";
import DogImage from "assets/images/offers/dog.png";

export const MainOffer = () => {
	const theme = useTheme();
	const isDownMD = useMediaQuery(theme.breakpoints.down("md"));
	const isXS = useMediaQuery(theme.breakpoints.only("xs"));

	return (
		<Box
			sx={{ backgroundColor: "#FCDCB5" }}
			height={isDownMD ? "auto" : "500px"}
		>
			<Grid container spacing={2} height="100%">
				<Grid item xs={12} md={6}>
					<Box
						flexGrow={1}
						p={isDownMD ? "30px" : "60px"}
						pr={isDownMD ? "30px" : 0}
						pb={isDownMD ? 0 : "60px"}
					>
						<Typography
							variant="h2"
							component="h2"
							sx={{
								color: "#0B0417",
								fontSize: "46px",
								fontWeight: 800,
								lineHeight: "46px",
								letterSpacing: 0,
								mb: "15px",
								width: isDownMD ? "auto" : "316px",
							}}
						>
							Сheck Out Our Specials
						</Typography>
						<Typography
							variant="body1"
							component="p"
							sx={{
								fontSize: "18px",
								fontWeight: 400,
								lineHeight: "26px",
								letterSpacing: 0,
								color: "#1C103B",
								width: isDownMD ? "auto" : "302px",
								mb: "1.875rem",
							}}
						>
							Massa placerat duis ultricies lacus. Aliquet bibendum enim
							facilisis gravida neque convallis
						</Typography>
						<AppButton>Shop Now</AppButton>G
					</Box>
				</Grid>

				<Grid item xs={12} md={6}>
					<Box
						display="flex"
						flexDirection="column"
						gap={2}
						height="100%"
						width="100%"
						alignItems={isDownMD ? "center" : "flex-end"}
						justifyContent="space-between"
						position="relative"
					>
						<Button
							variant="contained"
							sx={{
								mt: isDownMD ? "18px" : "60px",
								mr: isDownMD ? 0 : "60px",
								px: isXS ? "20px" : "30px",
								py: isXS ? "12px" : "20px",
								color: "#FFFFFF",
								fontSize: isXS ? "20px" : "24px",
								fontWeight: 800,
								lineHeight: "30px",
								letterSpacing: 0,
								position: "relative",
								zIndex: 1,
							}}
						>
							Up to 40% Off
						</Button>

						<Box
							display="flex"
							justifyContent="flex-end"
							position={isDownMD ? "static" : "absolute"}
							bottom="0"
							right="0"
						>
							<img
								src={DogImage}
								alt="offer 1"
								style={{ display: "block", width: "100%" }}
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
