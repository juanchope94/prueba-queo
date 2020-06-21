import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ApartmentIcon from '@material-ui/icons/Apartment';
import WorkIcon from '@material-ui/icons/Work';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListIcon from '@material-ui/icons/List';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const mainListItems =(props)=>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  return(
  <div>
     <ListItem button onClick={handleClick2}>
        <ListItemIcon style={{ marginRight: '-30px' }}>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Gestionar empleados" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon >
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="crear empleados" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon >
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Listar empleados" />
          </ListItem>
        </List>
      </Collapse>
    <ListItem button onClick={handleClick}>
        <ListItemIcon style={{ marginRight: '-30px' }}>
          <ApartmentIcon />
        </ListItemIcon>
        <ListItemText primary="Gestionar empresas" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Crear empresas" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Listar empresas" />
          </ListItem>
        </List>
      </Collapse>
    
  </div>
  );
}
export default mainListItems;