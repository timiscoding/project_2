json.array!(@tasks) do |task|
  json.extract! task, :id, :user_id, :activity_id, :due_date, :done
  json.url task_url(task, format: :json)
end
