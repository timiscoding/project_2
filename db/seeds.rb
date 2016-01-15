# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Group.destroy_all

g1 = Group.create :name => 'Awesome Flatemetes'
g2 = Group.create :name => 'Grotty Slobs'

User.destroy_all

u1 = User.create :first_name => 'Bobbit', :last_name => 'Slobs', :email => 'bobbit@email.com',  :password => 'chicken', :password_confirmation => 'chicken'
u2 = User.create :first_name => 'Sally', :last_name => 'Squiggles', :email => 'squiggles@email.com',  :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :first_name => 'Zippy', :last_name => 'Smith', :email => 'zippy@email.com',  :password => 'chicken', :password_confirmation => 'chicken'
u4 = User.create :first_name => 'Lambert', :last_name => 'Lumberjack', :email => 'lambert@email.com',  :password => 'chicken', :password_confirmation => 'chicken'
u5 = User.create :first_name => 'Poppin', :last_name => 'Bubbles', :email => 'bubbles@email.com',  :password => 'chicken', :password_confirmation => 'chicken'
u6 = User.create :first_name => 'Jelly', :last_name => 'Wobbles', :email => 'wobbles@email.com',  :password => 'chicken', :password_confirmation => 'chicken'
u7 = User.create :first_name => 'Jet', :last_name => 'Black', :email => 'jetblack@email.com',  :password => 'chicken', :password_confirmation => 'chicken'
u8 = User.create :first_name => 'Dazzle', :last_name => 'Zebra', :email => 'dazzle@email.com',  :password => 'chicken', :password_confirmation => 'chicken'

u1.groups << g1
u2.groups << g1 << g2
u3.groups << g1
u4.groups << g1
u5.groups << g2
u6.groups << g2 << g1
u7.groups << g2 << g1
u8.groups << g2


Activity.destroy_all

a1 = Activity.create :title => "bathroom cleaning", :effort => "4"
a2 = Activity.create :title => "kitchen cleaning", :effort => "3"
a3 = Activity.create :title => "vacuuming", :effort => "2"
a4 = Activity.create :title => "window cleaning", :effort => "1"
a5 = Activity.create :title => "watering plants", :effort => "1"
a6 = Activity.create :title => "changing light globe", :effort => "1"
a7 = Activity.create :title => "empting changing bins", :effort => "1"
a8 = Activity.create :title => "dusting", :effort => "2"

a1.group = g1
a2.group = g1
a3.group = g1
a4.group = g1
a5.group = g2
a6.group = g2
a7.group = g2
a8.group = g2

a1.user = u2
a2.user = u3
a3.user = u1
a4.user = u4
a5.user = u5
a6.user = u6
a7.user = u7
a8.user = u8

Task.destroy_all

t1 = Task.create :due_date => '2016-02-11', :done => true, :score => '1' 
t2 = Task.create :due_date => '2016-02-13', :done => true, :score => '2'
t3 = Task.create :due_date => '2016-02-15', :done => false, :score => '3'
t4 = Task.create :due_date => '2016-02-23', :done => false, :score => '4'
t5 = Task.create :due_date => '2016-01-01', :done => true, :score => '3' 
t6 = Task.create :due_date => '2016-01-08', :done => true, :score => '2'
t7 = Task.create :due_date => '2016-01-15', :done => true, :score => '3'
t8 = Task.create :due_date => '2016-01-22', :done => true, :score => '1'

t1.user = u1
t2.user = u2
t3.user = u2
t4.user = u3
t5.user = u3 
t6.user = u4
t7.user = u5
t8.user = u5

t1.activity = a1 
t2.activity = a2
t3.activity = a3
t4.activity = a4
t5.activity = a1 
t6.activity = a2
t7.activity = a3
t8.activity = a4