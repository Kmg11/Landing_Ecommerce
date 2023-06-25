import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import PathImage from "assets/images/services/Path.png";
import PawsImage from "assets/images/services/Paws.png";
import { AppButton } from "components/ui";
import { ServiceType } from "types";

type ServiceProps = ServiceType;

export function Service({ title, image, description, price }: ServiceProps) {
	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card
				sx={{
					border: "2px solid #EBE5F7",
					p: "2.5rem",
					borderRadius: "10px",
					boxShadow: 0,
					height: "100%",
					position: "relative",

					"&:hover": {
						"& div:first-of-type": { display: "block" },
						"& h3": { color: "#fff" },
						"& p": { color: "#fff" },
						"& button": { color: "#FFDA47" },
					},
				}}
			>
				<Box
					sx={{
						position: "absolute",
						zIndex: 1,
						inset: 0,
						width: "100%",
						height: "100%",
						display: "none",
						background:
							"linear-gradient(0deg, #7C58D3, #7C58D3), linear-gradient(0deg, #EBE5F7, #EBE5F7)",
					}}
				/>

				<Box
					sx={{
						position: "absolute",
						zIndex: 1,
						inset: 0,
						width: "100%",
						height: "100%",

						backgroundImage: `url(${PathImage}), url(${PawsImage})`,
						backgroundSize: "fill",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "bottom right, 90% 95%",
					}}
				/>

				<Box position="relative" zIndex={3}>
					<Box
						component="header"
						sx={{
							display: "flex",
							gap: "15px",
							alignItems: "center",
							mb: "15px",
						}}
					>
						<Box
							width="60px"
							height="60px"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<img src={image} alt={title} style={{ display: "block" }} />
						</Box>

						<Typography
							component="h3"
							fontSize="24px"
							fontWeight={800}
							lineHeight="30px"
							letterSpacing={0}
							sx={{ color: "#0E081E" }}
						>
							{title}
						</Typography>
					</Box>

					<CardContent sx={{ p: 0, mb: "20px" }}>
						<Typography
							variant="body2"
							fontSize="18px"
							fontWeight={400}
							lineHeight="26px"
							letterSpacing={0}
							color="#1C103B"
							mb="15px"
						>
							{description}
						</Typography>

						<Typography
							typography="body2"
							color="#1C103B"
							fontSize="18px"
							fontWeight={700}
							lineHeight="26px"
							letterSpacing={0}
						>
							From ${price.amount} / {price.type}
						</Typography>
					</CardContent>

					<CardActions sx={{ p: 0 }}>
						<AppButton>Get Service</AppButton>
					</CardActions>
				</Box>
			</Card>
		</Grid>
	);
}
