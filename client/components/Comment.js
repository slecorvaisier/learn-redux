import React from 'react';
import DeleteCommentBtn from './DeleteCommentBtn';

const Comment = (props) => {
  const index = props.index;
  const postId = props.postId;

  return (
    <div className="comment">
      <p>
        <strong>{props.comment.user}</strong>
        {props.comment.text}
        <DeleteCommentBtn
          index={index}
          postId={postId}
          onClick={props.onDeleteCommentClick}
        />
      </p>
    </div>
  )
};

Comment.propTypes = {
  comment:                React.PropTypes.object.isRequired,
  onDeleteCommentClick:   React.PropTypes.func.isRequired,
  postId:                 React.PropTypes.string.isRequired,
  index:                  React.PropTypes.number.isRequired,
};

export default Comment;
