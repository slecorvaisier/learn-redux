import React from 'react';
import { Link } from 'react-router';

const Main = (props) => {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
      {React.cloneElement(props.children, { ...props, key: undefined, ref: undefined })}
    </div>
  )
}

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
}

export default Main;
