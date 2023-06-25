import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type ServiceProps = {
	title: string;
	image: string;
	description: string;
	price: { amount: number; type: string };
};

export function Service({ title, image, description, price }: ServiceProps) {
	const theme = useTheme();

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card
				sx={{
					border: "2px solid #EBE5F7",
					p: "2.5rem",
					borderRadius: "10px",
					boxShadow: 0,
					height: "100%",
				}}
			>
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
					<Button
						endIcon={<ArrowForwardIcon sx={{ fontSize: "14px" }} />}
						sx={{
							color: theme.palette.primary.main,
							fontSize: "20px",
							fontWeight: 800,
							lineHeight: "30px",
							letterSpacing: 0,
							p: 0,
							textTransform: "none",
						}}
					>
						Get Service
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
