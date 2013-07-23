class Users < Netzke::Basepack::Form
  def configure(c)
    super
    c.width = 400
    c.height = 300
    c.title = "Simple window"
    c.persistence = true
    c.maximizable = true
    c.model = "User"
  end
end