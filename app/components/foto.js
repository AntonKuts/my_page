import React, {Component} from 'react';
import axios from 'axios';

export default class Foto extends Component {

state = {
  post: [],
  loading: true,
  error:null
}

  componentDidMount() {
    axios.get('https://api.unsplash.com/photos/?client_id=2fab425ed804172a761b3650caae0a91ed2bd0a4e1c9e6226303c086292c08d6')
      .then(res =>{
        this.setState({
          post: res.data,
          loading: false,
          error: null
        })
      }).catch(err =>{
      this.setState({
        loding: false,
        error: err
      });
    })
  }
  renderLoding(){
    return (
      <div>loading...</div>
    );
  }


  renderError(){
    return(
      <div>Something went wrong {this.stste.error.message}</div>
    )
  }
  renderPosts(){
    const {error, post} = this.state;
    if(error){
  return this.renderError;
    }
    return (
      <div className="mainBox">
        {post.map(post => (
            <img key={post.id} className="img1" src={post.urls.small} alt="#"/>
        )
      )}
      </div>
    );
  }
  render() {
    const {loding} = this.state;

    return (
      <div>
      <p className="topic">Foto</p>
        {loding ? this.renderLoding():this.renderPosts()}
        <p>.</p>
      </div>
    );
  }
};
