import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';

export default class RenderPost extends React.Component {

    render(){
      return (
        <>
          <p key={this.props.post_prop_obj._id}>
            {this.props.post_prop_obj.topic} has {this.props.post_prop_obj.votes} like[s] {''}
            <button onClick = {() => {
              UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes: 1}})
            }}>Like</button>
            <button onClick = {() => {
              UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes: -1}})
            }}>Dislike</button>
            <button onClick = {() => {
              UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
            }}>X</button>
          </p>
        </>
      );
    }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};
