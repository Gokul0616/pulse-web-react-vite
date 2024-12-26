import React from "react";
import "./CentralPost.css";
import TweakComponent from "../GeneralComponents/TweakComponent/TweakComponent";
import PostComponent from "../GeneralComponents/PostComponent/PostComponent";

const CentralPost = () => {
  return (
    <div className="main-post-container">
      <TweakComponent />
      <TweakComponent />
      <TweakComponent />
      <TweakComponent />
      <PostComponent
        username="john_doe"
        userProfileImage="https://via.placeholder.com/150"
        postImage="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        // postImage="https://via.placeholder.com/800x400"
        caption="This is an amazing photo!"
        likes={1500}
        comments={350}
        time="2 hours ago"
      />
      <PostComponent
        username="john_doe"
        userProfileImage="https://via.placeholder.com/150"
        postImage="https://pixlr.com/images/index/ai-image-generator-one.webp"
        caption="This is an amazing photo!"
        likes={1500}
        comments={350}
        time="2 hours ago"
      />
      <PostComponent
        username="john_doe"
        userProfileImage="https://via.placeholder.com/150"
        postImage="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
        caption="This is an amazing photo!"
        likes={1500}
        comments={350}
        time="2 hours ago"
      />

      <PostComponent
        username="john_doe"
        userProfileImage="https://via.placeholder.com/150"
        postImage="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
        caption="This is an amazing photo!"
        likes={1500}
        comments={350}
        time="2 hours ago"
      />
      <PostComponent
        username="john_doe"
        userProfileImage="https://via.placeholder.com/150"
        postImage="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        caption="This is an amazing photo!"
        likes={1500}
        comments={350}
        time="2 hours ago"
      />
      <PostComponent
        username="john_doe"
        userProfileImage="https://via.placeholder.com/150"
        postImage="https://ghantee.com/wp-content/uploads/2024/06/bal-gopal-image-1.jpg"
        caption="This is an amazing photo!"
        likes={1500}
        comments={350}
        time="2 hours ago"
      />
    </div>
  );
};

export default CentralPost;
