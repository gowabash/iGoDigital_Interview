class PagesController < ApplicationController
  def home
    @title = "iGoDigital Fibonacci Test"
  end
  
  def answer
    @title  = "Answer to the Fibonacci Test"
    @limit  = params[:limit]
    @answer = solve
  end
  
  def is_even?(x)
    (x % 2 == 0) ? true : false
  end

  def solve
    sum = 0
    terms = []
    (@limit.to_i).times do
      case terms.length
      when 0
        terms.push(1)
      when 1
        terms.push(2)
      else
        terms.push(terms[terms.length - 1] + terms[terms.length - 2])
      end
    end
    terms.each do |term|
      sum += term if is_even?(term)
    end
    return sum
  end
end