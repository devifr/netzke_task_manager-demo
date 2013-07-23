class Tasks < Netzke::Basepack::Form
  def configure(c)
    super
  	  c.model = "Task"
  end
end