class GraftPostJob < ApplicationJob
  queue_as :default

  def perform(post_id)
    post = Post.find(post_id)
    post_node = PostsController.render :_post, locals: { post: post }
    MessageBus.publish '/channel', [:add, 'data.posts', post_node]
  end
end
