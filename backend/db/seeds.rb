3.times do |n|
  restaurant = Restaurant.new(
    name: "test_restaurant_#{n}",
    fee: 100,
    time_required: 10,
  )

  12.times do |m|
    restaurant.foods.build(
      name: "test_food_#{m}",
      price: 500,
      description: "test_food_#{m}"
    )
  end

  restaurant.save!
end
