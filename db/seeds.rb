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

u1 = User.create :first_name => 'Bobbit', :last_name => 'Slobs', :email => 'bobbit@email.com',  :password => 'chicken', :password_confirmation => 'chicken', :total_score => 100
u2 = User.create :first_name => 'Sally', :last_name => 'Squiggles', :email => 'squiggles@email.com',  :password => 'chicken', :password_confirmation => 'chicken', :total_score => 22
u3 = User.create :first_name => 'Zippy', :last_name => 'Smith', :email => 'zippy@email.com',  :password => 'chicken', :password_confirmation => 'chicken', :total_score => 4
u4 = User.create :first_name => 'Lambert', :last_name => 'Lumberjack', :email => 'lambert@email.com',  :password => 'chicken', :password_confirmation => 'chicken', :total_score => 10
u5 = User.create :first_name => 'Poppin', :last_name => 'Bubbles', :email => 'bubbles@email.com',  :password => 'chicken', :password_confirmation => 'chicken', :total_score => 55
u6 = User.create :first_name => 'Jelly', :last_name => 'Wobbles', :email => 'wobbles@email.com',  :password => 'chicken', :password_confirmation => 'chicken', :total_score => 72
u7 = User.create :first_name => 'Jet', :last_name => 'Black', :email => 'jetblack@email.com',  :password => 'chicken', :password_confirmation => 'chicken', :total_score => 1
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

a1.update_attribute :group, g1
a2.update_attribute :group, g1
a3.update_attribute :group, g1
a4.update_attribute :group, g1
a5.update_attribute :group, g2
a6.update_attribute :group, g2
a7.update_attribute :group, g2
a8.update_attribute :group, g2

a1.update_attribute :user, u2
a2.update_attribute :user, u3
a3.update_attribute :user, u1
a4.update_attribute :user, u4
a5.update_attribute :user, u5
a6.update_attribute :user, u6
a7.update_attribute :user, u7
a8.update_attribute :user, u8

Task.destroy_all

t1 = Task.create :due_date => '2016-02-11', :done => true, :score => 1
t2 = Task.create :due_date => '2016-02-13', :done => true, :score => 2
t3 = Task.create :due_date => '2016-02-15', :done => false, :score => 3
t4 = Task.create :due_date => '2016-02-23', :done => false, :score => 4
t5 = Task.create :due_date => '2016-01-01', :done => true, :score => 3
t6 = Task.create :due_date => '2016-01-08', :done => true, :score => 2
t7 = Task.create :due_date => '2016-01-15', :done => true, :score => 3
t8 = Task.create :due_date => '2016-01-22', :done => true, :score => 1

t1.update_attribute :user, u1
t2.update_attribute :user, u2
t3.update_attribute :user, u2
t4.update_attribute :user, u3
t5.update_attribute :user, u3
t6.update_attribute :user, u4
t7.update_attribute :user, u5
t8.update_attribute :user, u5

t1.update_attribute :activity, a1
t2.update_attribute :activity, a2
t3.update_attribute :activity, a3
t4.update_attribute :activity, a4
t5.update_attribute :activity, a5
t6.update_attribute :activity, a6
t7.update_attribute :activity, a7
t8.update_attribute :activity, a8

# Before fixed like below! All the tasks were associated to group 1.

# TASK 2. activity = activity1 (group 1)

# TASK 2. activity = activity2 (group 1)

# TASK 3. activity = activity3 (group 1)

# TASK 4. activity = activity4 (group 1)

# TASK 5. activity = activity1 (group 1)

# TASK 6. activity = activity2 (group 1)

# TASK 7. activity = activity3 (group 1)

# TASK 8. activity = activity2 (group 1)

# These were not associated to any tasks before.

# activity5 (group 2)
# activity6 (group 2)
# activity7 (group 2)
# activity8 (group 2)

# Correct one

# TASK 1. activity = activity1 (group 1)

# TASK 2. activity = activity2 (group 1)

# TASK 3. activity = activity3 (group 1)

# TASK 4. activity = activity4 (group 1)

# TASK 5. activity = activity5 (group 2)

# TASK 6. activity = activity6 (group 2)

# TASK 7. activity = activity7 (group 2)

# TASK 8. activity = activity8 (group 2)













