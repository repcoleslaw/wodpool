import React from 'react'
//import
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

//MUI
import Paper from '@material-ui/core/Paper'

//Assets
import {useStyles} from '../../util/MakeStyles'

function Share(props) {
  const style = props.style
  const global = useStyles();
  return (
    <div className={style}>
      <Paper className={global.paper}>
        This is the share modal for
      </Paper>
    </div>
  )
}

export default Share
