class PostsController < ApplicationController
  before_action :use_relax_html

  def index
    @posts = Post.all
    render :index
  end

  def create
    Post.create(body: post_params[:body])

    redirect_to posts_path
  end

  def post_params
    params.require(:post).permit(:body)
  end
end
