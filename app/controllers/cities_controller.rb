class CitiesController < ApplicationController
  def index
    @city = City.all
  end

  def about
    @city = City.all
  end
end
