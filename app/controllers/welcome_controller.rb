class WelcomeController < ApplicationController
  def index
  end

  def login
  	respond_to do |format|
      format.json { render json: forgot }
    end
  end
  
  def forgot
  end

  def change_pass
  end
end
