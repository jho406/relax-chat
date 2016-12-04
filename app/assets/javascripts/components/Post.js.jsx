App.Components.Post = React.createClass( {
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    console.log('rendered Post component');
    return (
      <li className="media" >
        <div className="media-body">
          <p>{this.props.post.body}</p>
        </div>
      </li>
    );
  }
});
