class CountriesController < ApplicationController

  def index
    countries = Country.all
    render json: countries, :only => [:name, :image]
  end

end
