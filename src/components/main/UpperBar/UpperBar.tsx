import {
	Box,
	Container,
	Grid,
	Link,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { FacebookIcon } from "components";

export const UpperBar = () => {
	const theme = useTheme();
	const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box sx={{ backgroundColor: theme.palette.primary.main }}>
			<Container>
				<Grid container p={0.9}>
					<Grid
						item
						xs={12}
						md={6}
						justifyContent={isDownMd ? "center" : "start"}
						display="flex"
						alignItems="center"
						gap="19px"
					>
						<Link href="/" sx={{ color: "white" }}>
							<FacebookIcon />
						</Link>
						<Link href="/" sx={{ color: "white" }}>
							<InstagramIcon fontSize="small" />
						</Link>
						<Link href="/" sx={{ color: "white" }}>
							<TwitterIcon fontSize="small" />
						</Link>
						<Link href="/" sx={{ color: "white" }}>
							<WhatsAppIcon fontSize="small" />
						</Link>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						alignItems="center"
						justifyContent={isDownMd ? "center" : "start"}
						gap={5}
					>
						<Box display="flex" alignItems="center" gap="10px">
							<LocalPhoneIcon fontSize="small" />
							<Typography component="span" variant="subtitle1" fontWeight="700">
								0000 - 123456789
							</Typography>
						</Box>

						<Box display="flex" alignItems="center" gap="10px">
							<EmailIcon fontSize="small" />
							<Typography component="span" variant="subtitle1" fontWeight="700">
								info@example.com
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
