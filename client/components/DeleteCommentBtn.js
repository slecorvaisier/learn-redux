import React from 'react';

class DeleteCommentBtn extends React.Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.onClick(this.props.postId, this.props.index);
  }

  render() {
    return (
      <button
        className='remove-content'
        onClick={this._onClick}
      >
        &times;
      </button>
    )
  }
}

DeleteCommentBtn.propTypes = {
  index:          React.PropTypes.number.isRequired,
  postId:         React.PropTypes.string.isRequired,
  onClick:        React.PropTypes.func.isRequired,
};

export default DeleteCommentBtn;
