json.array!(@activities) do |activity|
  json.extract! activity, :id, :title, :effort, :group_id, :user_id
  json.url activity_url(activity, format: :json)
  json.avatar activity.user.avatar
end
