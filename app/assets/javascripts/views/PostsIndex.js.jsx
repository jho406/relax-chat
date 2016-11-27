App.Views.PostsIndex = function(json) {
  var posts = json.posts.map(function(post) {
    return (
      <App.Components.Post post={post} key={post.id}/>
    );
  });

  var metrics = json.metrics || {};

  return (
    <div className='row'>
      <div className='col-md-6 col-md-offset-3'>
        <h1>Chat Demo</h1>

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Dashboard</h3>
          </div>
          <div className="panel-body">
           Some expensive operation { metrics.num_of_views}
          </div>
        </div>


        <p>
          <a href={json.new_post_path}> new post </a>
          <a href={json.posts_path} data-rx-remote> index </a>
        </p>

        <ul className="media-list">
          <React.addons.CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            { posts }
          </React.addons.CSSTransitionGroup>
        </ul>

        <div className='chat-form'>
          <form className="form" method='post' action={json.posts_path} data-rx-remote>
            <input name="authenticity_token" type="hidden" value="0cLc4ZfZc39o5LwvYzE2SOLC6T2bz00KI/kd15DTsVA1kM5fiDNbBTqnlZEFT58x5QHHID/D3y6bhJn+q8Iavg==" />

            <div className="form-group">
              <input type="text" className="form-control" name="post[body]" placeholder="Your message here...." />
            </div>
            <button type="submit" className="btn btn-default">Send Message</button>
          </form>
        </div>
      </div>
  </div>
  );
};

