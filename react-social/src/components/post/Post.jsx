import "./post.css"
import { MoreVert } from "@material-ui/icons"
import {Users} from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {
    const[like, setLike] = useState(post.like)
    const[isLike, setIsLike] = useState(false)
    const handlerReact = () =>{
        setLike(isLike ? like -1 : like +1)
        setIsLike(!isLike)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u)=> u.id === post.id)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter((u)=> u.id === post.id)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" onClick={handlerReact} alt="" />
                        <img className="likeIcon" src="assets/heart.png" onClick={handlerReact} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>

                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">
                        {post.comment} comments
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
