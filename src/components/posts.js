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
  renderLinks() {
    const links = this.props.post_links.map((post_link, index) => {
      return (
        <div className="post-link" key={index}>
          <div className="post-link-box"></div>
          <div className="post-link-link">
            <a href={post_link.link_url}>usefull Link #{index + 1}</a>
          </div>
        </div>
      );
    });
    return links;
  }
  render() {
    if (this.props.type == "recent") {
      return (
        <li className="recent_posts">
          <div className="recent_posts_title">{this.props.title}</div>
          <div className="recent_posts_topic">{this.renderTopics()}</div>
        </li>
      );
    } else {
      return (
        <li className="result-post">
          <div className="result-post-topics">{this.renderTopics()}</div>
          <div className="result-post-title">{this.props.title}</div>
          <div className="result-post-links">{this.renderLinks()}</div>
        </li>
      );
    }
  }
}
export default Posts;
