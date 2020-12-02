import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import Posts from "./posts";

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }
  renderPosts() {
    const posts = this.props.recentPosts.map((posts, index) => {
      if (index < 3) {
        return <Posts type="recent" {...posts} key={index} />;
      }
    });
    return posts;
  }
  render() {
    return (
      <div>
        <div className="recent-posts">
          <div className="recent-posts-wrapper">
            <div className="recent-posts-heading">Recent Posts</div>
            <ul className="recent-posts-posts">{this.renderPosts()}</ul>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    recentPosts: state.posts.recentPosts,
  };
}
export default connect(mapStateToProps, actions)(RecentPosts);
