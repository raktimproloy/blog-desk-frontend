import React, { useEffect, useState } from 'react'
import MessageAlertStyle from "./style.module.css"
import { BsEmojiSmileFill } from 'react-icons/bs';

export const MessageAlert = ({alert, setAlert, print}) => {

  // const [alert, setAlert] = useState(true)
  // const print = {
  //   topic: true,
  //   text: "Your profile updated."
  // }
  // <MessageAlert alert={alert} setAlert={setAlert} print={print} />
  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 3000);
  }, [alert])
  return (
    <>
      <div className={`${MessageAlertStyle.container} ${alert && MessageAlertStyle.showMessage}`}>
        <div className={`${MessageAlertStyle.textContainer} ${print.topic ? "" : MessageAlertStyle.textContainerError}`}>
          <div className={`d-flex align-items-center justify-content-center`}>
            <span className={`pe-2 ${MessageAlertStyle.messageIcon}`}><BsEmojiSmileFill/></span>
            <span className={`${MessageAlertStyle.messageText}`}>{print.text}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageAlert;
