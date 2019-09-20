class SecretFile
  def initialize(secret_data, security_logger)
    @data = secret_data
    @security_logger = security_logger
  end

  def data
    security_logger.create_log_entry
    @data
  end

  private

  attr_reader :security_logger
end

class SecurityLogger
  def create_log_entry
  end
end

module Fuelable
  attr_accessor :speed, :heading
  attr_writer :fuel_capacity, :fuel_efficiency

  def range
    @fuel_capacity * @fuel_efficiency
  end
end

class WheeledVehicle
  include Fuelable

  attr_accessor :speed, :heading

  def initialize(tire_array, km_traveled_per_liter, liters_of_fuel_capacity)
    @tires = tire_array
    self.fuel_efficiency = km_traveled_per_liter
    self.fuel_capacity = liters_of_fuel_capacity
  end

  def tire_pressure(tire_index)
    @tires[tire_index]
  end

  def inflate_tire(tire_index, pressure)
    @tires[tire_index] = pressure
  end

end

class Auto < WheeledVehicle
  def initialize
    # 4 tires are various tire pressures
    super([30,30,32,32], 50, 25.0)
  end
end

class Motorcycle < WheeledVehicle
  def initialize
    # 2 tires are various tire pressures
    super([20,20], 80, 8.0)
  end
end

class SeaCraft
  include Fuelable

  attr_reader :propeller_count, :hull_count

  def initialize(propeller_count, hull_count, fuel_efficiency, fuel_capacity)
    @propeller_count = propeller_count
    @hull_count = hull_count
    @fuel_efficiency = fuel_efficiency
    @fuel_capacity = fuel_capacity
  end

  def range
    super + 10
  end
end

class Motorboat < SeaCraft
  def initialize(fuel_efficiency, fuel_capacity)
    super(1, 1, fuel_efficiency, fuel_capacity)
  end

end

class Catamaran < SeaCraft
end
