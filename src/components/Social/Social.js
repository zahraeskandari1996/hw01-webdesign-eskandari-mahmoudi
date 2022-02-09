import './App.css';
import ProfileImage from './profile.jpeg';
import MoreImage from './more.png';
import PostImage from './post.jpeg';
import Faker from 'faker';
import clsx from "clsx";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function mapping(data){
    return data.map((item,index)=>{
        return <div className="comment-container">
<div className="comment-first-box">
    <img src={Faker.internet.avatar()} className="comment-image" alt="Comment" />
    <p className="name">{Faker.internet.userName()} : </p>
    <p className="comment-caption">{Faker.lorem.sentence()}</p>
</div>
            <div className="comment-second-box">
              <p className="options">5h</p>
                <p className="options">Reply</p>
                <p className="options">{formatNumber(Faker.datatype.number())} likes</p>
            </div>
        </div>
    })
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function posts(post,data,username,avatar,sentence) {
    return post.map((item,index)=>{
return <div className="post">
<div className="post-header">
<div className="name-container">
<img src={avatar} className="img-profile" alt="Profile" />
<p className="name">{username}</p>
</div>
    <img src={MoreImage} className="img-more" alt="More" />
</div>
<img src={PostImage} className="post-img" alt="Post"  />
<CardActions className="start">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
<div className="caption-container">
    <p className="name">{username} :</p><p>{sentence}</p>
</div>

<div className="caption-time">
    <p>10h</p>
</div>

{mapping(data)}
</div>
    });
}
function Social() {
    let data=[
        {
         name:'',
        },
    ]
    let post=[
        {
         name:'',
        },
        {
         name:'',
        },
    ]
    let username = Faker.internet.userName();
    let avatar = Faker.internet.avatar();
    let sentence = Faker.lorem.sentence();
  return (
      <div>
          <div className="profile">
          <img src={ProfileImage} className="img-profiles" alt="Post"  />
          <div className="profile-data">
              <p>Posts</p>
              <p>2</p>
          </div>
          <div className="profile-data">
              <p>Followers</p>
              <p>1300</p>
          </div>
          <div className="profile-data">
              <p>Following</p>
              <p>2060</p>
          </div>
          </div>
{posts(post,data,username,avatar,sentence)}
</div>
  );
}



export default Social;
