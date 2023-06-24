import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Logo } from "components";
import { List } from "./List/List";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function Navbar() {
	return (
		<AppBar
			position="static"
			sx={{ backgroundColor: "transparent", boxShadow: 0 }}
		>
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						py: "1.125rem",
					}}
				>
					<Logo />

					<List />

					<Button
						variant="contained"
						startIcon={<ShoppingCartIcon sx={{ fontSize: "18px" }} />}
						sx={{
							width: "120px",
							height: "49px",
							background:
								"linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #7C58D3, #7C58D3)",
							border: "1px solid #7C58D3",
							fontSize: "1rem",
							fontWeight: "700",
							lineHeight: "19px",
							letterSpacing: 0,
							color: "#1C103B",
							p: "0",
							"& > span": {
								marginLeft: "0",
								marginRight: "8px",
							},
						}}
					>
						(1 item)
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
