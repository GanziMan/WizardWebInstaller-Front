import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { SwpLogReq } from '../../redux/actions/LogAction';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function LinearProgressWithLabel(props) {
  return (
    <Box 
    sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Box 
      sx={{ width: '100%', mr: 1 }}
      >
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='white;'>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}



export default function ScrollDialog() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.LogReducer);
  const [logss, setLogss] = useState({});
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
      let timer = setInterval(() => {
        dispatch(SwpLogReq());
      }, 1000);
          return () => clearInterval(timer);
      }, []);


  useEffect(() => {
    if(selector?.logs !== undefined) {
      setLogss(selector);
    }
  }, [selector]);

  useEffect(() => {
    if(logss?.logs !== undefined){
      console.log(logss?.logs.includes('InstallerStart'));
      if (logss?.logs.includes('InstallerExit')){
        setProgress(100);
      }
       else if (logss?.logs.includes('agentStopBefore')){
          setProgress(90);
      }
      else if (logss?.logs.includes('agentStartBefore')){
          setProgress(80);
      }
      else if (logss?.logs.includes('imageDownloadBefore')){
        setProgress(50);
      } 
      else if (logss?.logs.includes('setRepo')){
        setProgress(42);
      } 
      else if (logss?.logs.includes('composeAfter')){
          setProgress(40);
      } 
      else if (logss?.logs.includes('composeBefore')){
          setProgress(31);
      } 
      else if (logss?.logs.includes('dockerAfter')){
          setProgress(30);
      }
      else if (logss?.logs.includes('dockerBefore')){
          setProgress(5);
      } 
      else if(logss?.logs.includes('InstallerStart')) {
        setProgress(1);
      }
    } 
    
  }, [logss])

  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>

      <Button sx={{color:'white;'}} onClick={handleClickOpen('paper')}>Detail</Button>
      <Dialog 
        fullWidth = {true}
        maxWidth = {'sm'}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle 
        sx={{backgroundColor:'black;', color:'white;'}}
         id="scroll-dialog-title">Detail</DialogTitle>
        <DialogContent 
        sx={{color:'white;', backgroundColor:'black;'}}
         dividers={scroll === 'paper'}>
          <DialogContentText 
          sx={{fontSize:'3px', color:'white;'}}
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {logss?.logs ? (
      <pre>
      {logss?.logs}
    </pre>)
    : <>...</>}
          </DialogContentText>
        </DialogContent>
        <DialogActions 
        sx={{backgroundColor:'black;'}}>
          <Button sx={{color:'white;'}} onClick={handleClose}>Exit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}