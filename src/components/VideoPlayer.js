import React from "react";
import "lodash/lodash.js";
import cloudinary from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.js"
import "cloudinary-video-player/dist/cld-video-player.min.css"
import "jquery/dist/jquery.js"
import './videoplayer.css'

class VideoPlayer extends React.Component {
    componentDidMount() {
        const { publicID, title, subtitle, muted, posterID } = this.props

        let cl = cloudinary.Cloudinary.new({ cloud_name: "castles", secure: true })
        let videoPlayer = cl.videoPlayer('cl-vp', {
            loop: false,
            controls: true,
            muted: muted ? true : false,
            transformation: {

                //gravity: "auto",
                //height: "1040",
               // width: "1920",
                crop: "fill_pad"


            },
            posterOptions: {
                //publicId: publicID,

                //effect: ['sepia'],
                //gravity: "auto",
                //height: "1040",
                //width: "1920",
                //crop: "fill",
                start_offset: posterID,
            }
            //crop: "fill",
            //gravity: "auto",

        })
        videoPlayer.source(publicID ? publicID : "", {
            //info: { title: title ? title : "", subtitle: subtitle ? subtitle : "" } 

        })
        // Set a fixed poster with a sepia effect to all videos:
        //videoPlayer.posterOptions({ publicId: 'king-keyframe', transformation: { effect: ['sepia'] } })
    }

    render() {
        return (
            <div className="video-player">
                    <video 
                        //autoPlay
                        class="cld-video-player cld-fluid"
                        id="cl-vp">
                    </video>
            </div>

        )
    }
}

export default VideoPlayer
