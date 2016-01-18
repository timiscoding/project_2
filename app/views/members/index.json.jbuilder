json.array!(@members) do |member|
  json.extract! member, :id, :first_name, :last_name, :total_score
end
