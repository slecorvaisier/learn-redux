import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => {
        return <Photo {...props} key={i} i={i} post={post} />
      })}
    </div>
  )
}

PhotoGrid.propTypes = {
  posts: React.PropTypes.array.isREquired,
}

export default PhotoGrid;
