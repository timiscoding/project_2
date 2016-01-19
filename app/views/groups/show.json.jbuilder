# json.extract! @group, :id, :name, :created_at, :updated_at
json.extract! @group, :id, :name
json.users @group.users do |member|
  json.extract! member, :id, :first_name, :last_name, :total_score
end
