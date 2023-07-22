import React, { useEffect, useState } from 'react'
import settingStyle from "../style.module.css"

const ImageSetting = ({databaseApi, updateProfile, setUpdateProfile, presentImage}) => {
  const handlePhoto = (e) => {
    setUpdateProfile({...updateProfile, profileImage: e.target.files[0]})
  }
  return (
    <>
      <div className='text-center'>
        <img src={`${presentImage}`} alt='profile' className={`${settingStyle.settingProfileImage} mb-3`} />
        <p className='textColor1'>Upload your profile picture in 1mb.</p>
        <input type="file" className="form-control mb-3" name="profileImage" autoComplete="off" onChange={handlePhoto} />
        {/* <div>
          <h2>Your's Blog</h2>
          <p>Total blog: <span></span></p>
          <p>Category: <span>21</span></p>
        </div> */}
      </div>
    </>
  )
}

export default ImageSetting