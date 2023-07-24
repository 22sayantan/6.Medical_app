/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import './postCard.css'

export default function PostCard(props) {

    const {postImg,postTitle} = props;

  return (
    <>
      <div className="postcard">
        <img src={postImg} alt="no img" />

        <div className="desc">
            <h3>{postTitle}</h3>
        </div>

      </div>
    </>
  )
}
