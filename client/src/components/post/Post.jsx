import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { useState, useEffect } from "react"
import {format} from 'timeago.js'
import axios from 'axios'
import { Users } from "../../dummyData"

export default function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(post.likes.length)
    const [user, setUser] = useState({})
    

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`users/${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const handlerReact = () => {
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }
    const src_img = PF + user.profilePicture
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={src_img} alt="" />
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF + post.img} alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} onClick={handlerReact} alt="" />
                        <img className="likeIcon" src={`${PF}heart.png`} onClick={handlerReact} alt="" />
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
