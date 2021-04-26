import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import Footer from './../imports/ui/Footer.js'
import App from './../imports/ui/App.js'


Meteor.startup(() => {

  Tracker.autorun(() => {
    const allPostsInDB = UP_Collection_Access.find({}, {sort: {votes: -1}}).fetch();
    let title = 'Facebook';
    //let footer = 'my foot';

    ReactDOM.render(<App passedPropTitle={title} passedPropModerator={'TylerH'}
      passedPropAllPosts={allPostsInDB}/>, document.getElementById('content'));
  });
});
