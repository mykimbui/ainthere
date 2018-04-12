class CitiesController < ApplicationController
  def index
    @city = City.all
  end
end
