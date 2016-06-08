import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();
    const { postId } = this.props;
    const { authorRef, commentRef } = this.refs;
    this.props.addComment(postId, authorRef.value, commentRef.value);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) => {
          return (
            <Comment
              key={i}
              index={i}
              postId={this.props.postId}
              comment={comment}
              addComment={this.props.addComment}
              onDeleteCommentClick={this.props.onDeleteCommentClick}
            />
          )
        })}
        <form ref='commentForm' className='comment-form' onSubmit={this._handleSubmit}>
          <input type='text' ref='authorRef' placeholder='author' />
          <input type='text' ref='commentRef' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

Comments.propTypes = {
  postId: React.PropTypes.string.isRequired,
  postComments: React.PropTypes.array.isRequired,
  addComment: React.PropTypes.func.isRequired,
  onDeleteCommentClick: React.PropTypes.func.isRequired,
}

export default Comments;
