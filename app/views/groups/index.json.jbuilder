json.array!(@groups) do |group|
  #json.extract! group, :id, :name
  #json.url group_url(group, format: :json)
  json.extract! group, :id, :name
  json.users group.users do |member|
    json.extract! member, :id, :first_name, :last_name, :total_score
  end
end
