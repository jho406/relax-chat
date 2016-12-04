App.Views.PostsIndex = function(json) {
    var posts = json.posts.map(function(post) {
      return (
        <li className="media">
          <div className="media-body">
            <p>{post.body}</p>
          </div>
        </li>
      );
    });


  return (
    <div className='row'>
      <div className='col-md-6 col-md-offset-3'>
        <h1>Chat Demo</h1>

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Dashboard</h3>
          </div>
          <div className="panel-body">
           Some expensive operation
          </div>
        </div>


        <p>
          <a href={json.new_post_path}> new post </a>
        </p>

        <ul className="media-list">
          { posts }
        </ul>

      </div>
  </div>
  );
};

