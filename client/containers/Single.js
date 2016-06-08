import { connect } from 'react-redux';
import { increment, removeComment, addComment } from '../actions/actionCreators'
import Single from '../components/Single'

const mapStateToProps = (state) => {
  return {
    state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikesClick: (postId) => {
      dispatch(increment(postId))
    },
    addComment: (postId, author, comment) => {
      dispatch(addComment(postId, author, comment))
    },
    onDeleteCommentClick: (postId, index) => {
      dispatch(removeComment(postId, index))
    },
  }
}

const SingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single)

export default SingleContainer;
