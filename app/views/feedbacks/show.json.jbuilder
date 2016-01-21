json.extract! @feedback, :id, :user_id, :task_id, :rating, :created_at, :updated_at
json.done @feedback.task.done
json.group_id @feedback.task.activity.group_id
json.title @feedback.task.activity.title
json.first_name @feedback.user.first_name  

