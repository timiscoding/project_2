# json.array!(@groups) do |group|
#  json.extract! group, :id, :name
# end

json.array!(@groups) do |group|
  json.extract! group, :id, :name
  json.users group.users do |member|
    json.extract! member, :id, :first_name, :last_name, :total_score, :email, :avatar
  end
end

