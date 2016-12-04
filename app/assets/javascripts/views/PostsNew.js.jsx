App.Views.PostsNew = function(json) {
  var metrics = json.metrics || {}
  return (
    <div className='row'>
      <div className='col-md-6 col-md-offset-3'>
        <h1>Chat Demo</h1>

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Dashboard</h3>
          </div>
          <div className="panel-body">
            Some expensive operation {metrics.num_of_views}
          </div>
        </div>

      </div>
    </div>
  );
};

