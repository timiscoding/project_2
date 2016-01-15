json.array!(@feedbacks) do |feedback|
  json.extract! feedback, :id, :user_id, :task_id, :rating
  json.url feedback_url(feedback, format: :json)
end
