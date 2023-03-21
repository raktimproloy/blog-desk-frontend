import React from 'react'

function SeeMore({showSeeMoreCount, setShowSeeMoreCount}) {

//     const [showSeeMoreCount, setShowSeeMoreCount] = useState(10)
// <SeeMore showSeeMoreCount={showSeeMoreCount} setShowSeeMoreCount={setShowSeeMoreCount} />

    const handleSeeMore = () => {
        setShowSeeMoreCount(showSeeMoreCount + 10)
    }

  return (
    <>
        <div onClick={handleSeeMore} className="bgColorLeftToRight" >
            <div>
                See More
            </div>
        </div>
    </>
  )
}

export default SeeMore