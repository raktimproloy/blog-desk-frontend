import React, { useState } from 'react'
import LoadingStyle from "./style.module.css"
import LoadingGif from "../../../images/loadingGif/Disk-1s-200px.gif"

function Loading({loading, setLoading, loadingMessage}) {
    //   const [loading, setLoading] = useState(true)
  // const print = {
  //   topic: true,
  //   text: "Your profile updated."
  // }
  // <MessageAlert alert={alert} setAlert={setAlert} print={print} />

//   useEffect(() => {
//     setTimeout(() => {
//       setAlert(false)
//     }, 3000);
//   }, [alert])
  return (
    <>
        <div className={`${LoadingStyle.container} ${loading && LoadingStyle.showMessage}`}>
            <div className={`${LoadingStyle.textContainer}`}>
                <div className={`d-flex align-items-center justify-content-center`}>
                    <img src={LoadingGif} alt="loading..." className={`${LoadingStyle.loadingGif} me-2`} />
                    <p>{loadingMessage}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Loading