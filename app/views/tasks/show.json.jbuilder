json.extract! @task, :id, :user_id, :activity_id, :due_date, :done, :score, :created_at, :updated_at
json.title @task.activity.title
json.effort @task.activity.effort
json.first_name @task.user.first_name
