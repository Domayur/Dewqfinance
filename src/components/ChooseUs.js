import React, { useRef, useState, useEffect } from 'react'
import Img1 from '../images/play_button.png'
import IdewqimageImg from '../images/dewq_image.png'


const ChooseUs = () => {
    const videoRef = useRef(null);
    const node = useRef();

    const [flag, setflag] = useState(false)
    const handleVideoBtn = () => {
         setflag(true)
    }

    const handleVideoBtnClose = () => {
        setflag(false)
    }


    useEffect(() => {
        if (flag) {
            document.addEventListener("click", handleOutsideClick, false);
        } else {
            document.removeEventListener("click", handleOutsideClick, false);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick, false);
        };
    }, [flag]);


    const handleOutsideClick = e => {
        console.log("sd")
        videoRef.current.pause();
        setflag(false)

        if (!node.current.contains(e.target)) {
            handleVideoBtn();
        }
    };
    return (
        <>
            <section class="tf-section section-choose-us">
                <div class="container">
                    <div class="main-choose-us">
                        <h2 class="heading-title wow" data-splitting>EXPERIENCE SPEAKS<br />VOLUMES</h2>
                        <div class="main-content">
                            <div class="intro-content">
                                <h3 class="title wow" data-splitting>
                                    <span class=""> Your Business Needs the Best <br /> Our Past Work Will Give <br /> You an Inside View of What to Expect.</span>
                                </h3>
                            </div>
                            <div class="container video">
                                <div class="row">
                                    <div class="col-md-6">
                                        <img src={IdewqimageImg} class="img-fluid" />
                                        <img src={Img1} class="play-btn" data-toggle="modal" data-target="#play-video-1" onClick={handleVideoBtn} />
                                    </div>
                                </div>
                            </div>
                            <div class={`modal fade ${flag ? "show" : ""}`} id="play-video-1" ref={node}>
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            {/* <button type="button" class="close cst-close" data-dismiss="modal" aria-label="Close" onClick={handleVideoBtnClose}>
                                                <span aria-hidden="true">&times;</span>
                                            </button> */}
                                            <video width="100%" controls ref={videoRef} className="text-center" >
                                                <source src="../../video/video1.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default ChooseUs