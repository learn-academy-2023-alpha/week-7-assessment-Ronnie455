# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    #The index in BlogsPostsController is a action that defines the behavior of the controller when it recieves a GET request.
    # ---2)
    #This recieves all of the records in the BlogPost model and stores them in @posts 
    @posts = BlogPost.all
  end

  # ---3)
  #This will get a specific id of a blog post and assigns it to @post and can be used by the view to display the blog post
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #The new action creates a instance in BlogPost.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    #This will create a new blog post based on parameters submitted by the new action.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    #This will retrieve a blog post from the BlogPost model by the :id parameter.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #This will update a blog post based on the parameters from the edit action. The blog_post_params will is used to filter only what the blog_post_params have been set to
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # This will delete a blog post based on the inputted :id
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # private specifies that the methods cannot be accessed outside of the controller. It defines blog_post_params as private
  private
  def blog_post_params
    # ---10)
    # This is saying that it requires a key :blog_post and permits only :title and :content parameters. If anything else is passed it will return an error
    params.require(:blog_post).permit(:title, :content)
  end
end
