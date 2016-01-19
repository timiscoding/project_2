json.array!(@tasks) do |task|
  json.extract! task, :id, :user_id, :activity_id, :due_date, :done, :score
  json.url task_url(task, format: :json)
  json.title task.activity.title
  json.effort task.activity.effort
  json.first_name task.user.first_name
end
