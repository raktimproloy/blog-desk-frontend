import React from 'react'
import FooterStyle from "./style.module.css"

function Footer() {
  return (
    <div className={`py-3 ${FooterStyle.backGround}`}>
        <div className={`container`} >
            <div className='d-flex justify-content-between align-items-center'>
                <p>© 2023 BlogDesk, made by Raktim</p>
                <ul className='d-flex justify-content-between m-0'>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>gmail</li>
                    <li>youtube</li>
                    <li>instagram</li>
                    <li>linkdin</li>
                </ul>
                <p>Go to Top</p>
            </div>
        </div>
    </div>
  )
}

export default Footer