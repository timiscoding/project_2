json.array!(@feedbacks) do |feedback|
  json.extract! feedback, :id, :rating
  json.date feedback.updated_at
  json.user do
    json.id feedback.user_id
    json.first_name feedback.user.first_name
    json.last_name feedback.user.last_name
  end
  json.task do
    json.id feedback.task_id
    json.title feedback.task.activity.title
    json.due_date feedback.task.due_date
    json.score feedback.task.score
  end
end