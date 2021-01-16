import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import EditIcon from '@material-ui/icons/Edit';
import PetsIcon from '@material-ui/icons/Pets';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#90CAF9',
		textAlign: 'center',
	},
	linkStyle: {
		textDecoration: 'none',
		color: theme.palette.text.primary
	}
}));

export default function Sidebar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem button>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<Link className={classes.linkStyle} to="/">
						<ListItemText primary="Home" />
					</Link>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<ShoppingBasketIcon />
					</ListItemIcon>
					<Link className={classes.linkStyle} to="/Products">
						<ListItemText primary="Products" />
					</Link>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<EditIcon />
					</ListItemIcon>
					<ListItemText primary="Edit" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<PetsIcon />
					</ListItemIcon>
					<Link className={classes.linkStyle} to="/Neola">
						<ListItemText primary="Neola" />
					</Link>
				</ListItem>
			</List>
		</div>
	);
}
