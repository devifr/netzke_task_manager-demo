class TaskTabPanel < Netzke::Base
  js_configure do |c|
    c.extend = "Ext.tab.Panel"
  end
  
  component :tasks do |c|
    c.klass = Tasks
  end

  component :users do |c|
    c.klass = Users
  end

  def configure(c)
    super
    c.items = [:tasks, :users]
  end
end