import React, { Component } from "react";

class Posts extends Component {
  renderTopics() {
    const topics = this.props.associated_topics.map((topic, index) => {
      return (
        <span className="post-topic" key={index}>
          {topic}
        </span>
      );
    });
    return topics;
  }
  render() {
    return (
      <li className="recent_posts">
        <div className="recent_posts_title">{this.props.title}</div>
        <div className="recent_posts_topic">{this.renderTopics()}</div>
      </li>
    );
  }
}
export default Posts;
