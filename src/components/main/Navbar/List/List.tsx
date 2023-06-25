import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme, useMediaQuery } from "@mui/material";

const pages = ["Home", "Services", "Shop", "Blog", "Pages"];

export function List() {
	const theme = useTheme();
	const isDownMD = useMediaQuery(theme.breakpoints.down("md"));
	const isXS = useMediaQuery(theme.breakpoints.only("xs"));

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<Box
				flexGrow={1}
				sx={{
					display: { xs: "flex", lg: "none" },
					justifyContent: { xs: "flex-end" },
				}}
			>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color={!isDownMD ? "inherit" : "primary"}
				>
					<MenuIcon />
				</IconButton>

				<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{ display: { xs: "block", lg: "none" } }}
				>
					{pages.map((page) => (
						<MenuItem
							key={page}
							onClick={handleCloseNavMenu}
							sx={{ minWidth: "120px" }}
						>
							<Typography textAlign="center">{page}</Typography>
						</MenuItem>
					))}

					{isXS && (
						<MenuItem onClick={handleCloseNavMenu} sx={{ minWidth: "120px" }}>
							<Typography textAlign="center">Cart</Typography>
						</MenuItem>
					)}
				</Menu>
			</Box>

			<Box sx={{ display: { xs: "none", lg: "flex" }, gap: { lg: "3.75rem" } }}>
				{pages.map((page, index) => (
					<Button
						key={page}
						onClick={handleCloseNavMenu}
						sx={{
							fontSize: "18px",
							fontWeight: 700,
							lineHeight: "18px",
							letterSpacing: 0,
							color: index < 3 ? "#392C53" : "#DCFF02",
						}}
					>
						{page}
					</Button>
				))}
			</Box>
		</>
	);
}
