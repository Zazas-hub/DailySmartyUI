import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }
  render() {
    return (
      <div>
        <div className="recent-posts">
          <div className="recent-posts-wrapper">Recent Posts</div>
          <ul className="recent-posts-posts">
            <li>recent posts 0</li>
            <li>recent posts 1</li>
            <li>recent posts 2</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default connect(null, actions)(RecentPosts);
