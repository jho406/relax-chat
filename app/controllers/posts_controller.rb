class PostsController < ApplicationController
  before_action :use_relax_html

  def index
    @posts = Post.all
    render :index
  end

  def create
    @post = Post.create(body: post_params[:body])
    if relax_silient?
      GraftPostJob.perform_later @post.id
      head 204
    else
      redirect_to posts_path
    end
  end

  def post_params
    params.require(:post).permit(:body)
  end
end
