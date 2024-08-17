import React from 'react'
import '../Styles/RealContent.css'
import Guestcircleicons from '../SVGS/Guestcircleicons'

const RealContent = () => {
    return (
        <section className='realcontent-sect'>
            <div className="realcontent-cont">
                <div className="realcontent-row realcontent-justify">
                    <div className="realcontent-left">
                        <h3 className="realcontent-h3" style={{ fontSize: '27px', position: 'absolute' }}>100% real content real results<br />100% organic traffic<br />100% expert created content </h3>
                    </div>

                    <div className="realcontent-right">
                        <Guestcircleicons />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RealContent
