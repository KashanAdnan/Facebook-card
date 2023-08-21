import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Post = ({ image, title }) => {
    return (
        <div className="post">
            <div className="owner">
                <div className="image-user">
                    <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-1/364681108_196889313379071_4726774429541062496_n.jpg?stp=cp0_dst-jpg_p40x40&amp;_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_eui2=AeEfRdtMmHfjBNzRhZl3uBQTPAFYmueWijk8AVia55aKOTkibuIFZn7r51-opHMeA5H-AzWQUpgr7hAsxu77mowj&amp;_nc_ohc=a818dhJ_BM4AX-oGwil&amp;_nc_ht=scontent.fkhi2-3.fna&amp;oh=00_AfAaWBPnR8dFzOWVbPFpsBN0-ui_UxM1xqxmV6KQr7wD5w&amp;oe=64E32FC7" alt="" />
                    <div className="name">
                        <h3>Kashan Adnan</h3>
                        <p>9 August at 22 : 29</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
            <div className="post-card">
                <p>{title}</p>
                <img src={image} />
                <div className="icons">
                    <div className="like">Like</div>
                    <div className="share">Share</div>
                    <div className="comment">Comment</div>
                </div>
            </div>
        </div>
    )
}

export default Post
