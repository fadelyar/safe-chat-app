import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CustomAvatar from "./CustomAvatar";
import Popper from "@material-ui/core/Popper";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/CloseRounded";
import SendIcon from "@material-ui/icons/SendRounded";
import { purple } from "@material-ui/core/colors";
import { InputBase } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
   root: {
      display: "flex",
      position: "absolute",
      bottom: "30px",
      width: "300px",
      flexDirection: "column",
      height: "450px",
   },
   messageArea: {
      flexGrow: 1,
   },
   headerDiv: {
      display: "flex",
      alignItems: "center",
   },
   footerDiv: {
      display: "flex",
      alignItems: "center",
   },
   inputBase: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
      fontFamily: "Fira Code",
      height: "100%",
      color: "black",
      width: "100%",
   },
   flexGrow: {
      flexGrow: 1
   }
}));

function CustomPopper(props) {
   const classes = useStyle();
   return (
      <Popper open={props.open}>
         <Paper className={classes.root}>
            <div className={classes.headerDiv}>
               <CustomAvatar src="/man.svg" />
               <div className={classes.flexGrow} />
               <IconButton size="small" onClick={props.handleClose}>
                  <CloseIcon />
               </IconButton>
            </div>
            <div className={classes.messageArea}></div>
            <div className={classes.footerDiv}>
               <IconButton style={{ borderRadius: 0, color: purple["900"] }}>
                  <SendIcon />
               </IconButton>
               <InputBase className={classes.inputBase} />
            </div>
         </Paper>
      </Popper>
   );
}

export default CustomPopper;