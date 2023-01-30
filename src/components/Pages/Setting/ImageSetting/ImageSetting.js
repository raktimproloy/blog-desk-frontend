import React from 'react'
import settingStyle from "../style.module.css"

const ImageSetting = ({databaseApi, updateProfile, setUpdateProfile}) => {
  const handlePhoto = (e) => {
    setUpdateProfile({...updateProfile, profileImage: e.target.files[0]})
}
  return (
    <>
      <div className='text-center'>
        <img src={`${databaseApi}/${updateProfile?.profileImage}`} alt='profile' />
        <input type="file" className="form-control" name="profileImage" autoComplete="off" onChange={handlePhoto} />
        <p>Upload your profile picture in 1mb.</p>
        <div>
          <h2>Your's Blog</h2>
          <p>Total blog: <span></span></p>
          <p>Category: <span>21</span></p>
        </div>
      </div>
    </>
  )
}

export default ImageSetting