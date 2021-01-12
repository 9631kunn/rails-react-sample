class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true

  validates :count, numericality: { greater_than: 0 }

  scope :active, -> { where(active: true) }
  scope :order_restaurant, -> ( picked_restaurant_id ) { where.not(restaurant_id: picked_restaurant_id) }

end
