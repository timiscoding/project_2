# json.extract! @group, :id, :name, :created_at, :updated_at
json.array!(@group_members) do |member|
  json.extract! member, :id, :first_name, :last_name, :total_score
  end
