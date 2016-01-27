json.array!(@feedbacks) do |feedback|
  json.extract! feedback, :id, :user_id, :task_id, :rating
  json.url feedback_url(feedback, format: :json)
  json.done feedback.task.done
  json.group_id feedback.task.activity.group_id
  json.title feedback.task.activity.title
  json.first_name feedback.task.user.first_name
end
