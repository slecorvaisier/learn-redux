import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {

    const i = props.posts.findIndex((x) => x.code === props.params.postId);
    const post = props.posts[i];
    const postComments = props.comments[post.code] || [];

    return (
      <div className="single-photo">
        <Photo
          i={i}
          post={post}
          comments={props.comments}
          onIncrementLikesClick={props.onIncrementLikesClick}
        />
      <Comments
        postId={post.code}
        postComments={postComments}
        addComment={props.addComment}
        onDeleteCommentClick={props.onDeleteCommentClick}
      />
      </div>
    )
}

Single.propTypes = {
  posts:                React.PropTypes.array.isRequired,
  params:               React.PropTypes.object.isRequired,
  comments:             React.PropTypes.object.isRequired,
  addComment:           React.PropTypes.func.isRequired,
  onDeleteCommentClick: React.PropTypes.func.isRequired,
};

export default Single;
