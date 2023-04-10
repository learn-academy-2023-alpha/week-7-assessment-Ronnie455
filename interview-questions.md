# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Foreign keys are used to pull information between tables in databases. In order to fix this you could create a new database migration using the generate method. The foreign key would live in the Cohort model. It would be called cohort:id

Researched answer: If you created a model cohort that has many_students and forgot to add the foreign key you can use rails g migration AddCohort cohort:references (or whatever you want to name the migration) which will add a cohort_id to the students database column. Once you've created the migration you use the command `rails db:migrate` the students table will have a new a new foreign key that references the id column of the cohort table.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that need params to be passed are GET, PUT, DELETE, POST, PUT and delete. (HTTP verbs) and they must be passed params because they're used to update, modify, delete and add new data. Without params it wouldn't know how or what to change.

Researched answer: I was correct in the RESTful routes that need params to be passed. After researching they are:
GET which retrieves a resource by its ID.
PUT or PATCH updates a resource by its given ID.
DELETE deletes a resource by its given ID.
POST creates a new resource. Which it needs params because it needs data in order to create a new resource.
PUT or PATCH can also update multiple resources.
DELETE /resource deletes ALL resources.

3. Name three rails generator commands. What is created by each?

Your answer: rails g model which creates a new file in the model folder
rails g controller creates a new controller file in the controllers folder
rails g migration creates a new database in the migrate folder.

Researched answer:
rails g model creates a new database model file in app/models director. It also creates a new database migration file in db/migrate directory. You would use this command by running rails g model Column_name name:string phone:integer
____________
rails g controller generates a new controller file in the controllers directory. to run this command you would use: rails g controller Whatever(your controller name) index(I'm just using index as an example) this command will create an index.html.erb view file as well as a pages_helper.rb helper file
____________
rails g migration generates a database migration file in the migrate folder. Migrations are used to add and modify database scheema. You would use rails g migration AddWhateverToModel name:string
to update the database scheema you would then run rails db:migrate

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The controller method would be called would be GET/studens which the route would be index. The index performs a query to retrieve all of the student data from the database.

def index
@students = Student.all
  end
end

action: "POST" location: /students
The action post would be the create route. This would create a new student record in the database.

def create
@student = Student.new(student_params)
  end
end
You would then create if and else statements as well as creating a new def for the student params data.

action: "GET" location: /students/new
The route of this controller is new. It would allow you to implement a method that can create a new student in the database.
def new
@student = Student.new
  end
end


action: "GET" location: /students/2
The route in this is /2 which will "GET" the students data with the id of 2 which is typically the show method.

def show
@student = Student.find(params[:id])
  end
end


action: "GET" location: /students/2/edit
So this will go to the students controller, get the student id:2 and allow us to edit the student with the id of 2's data.
def edit
@student = Student.find(params[:id])
  end
end
You can use this def to edit the data in postman by going to localhost:3000/students/2/edit and set the http to put or patch and selecting the body tab, x-www-form-urlendoced tab and enter the attribute names and values in the key and values fields, then select the raw tab and update the data.

action: "PATCH" location: /students/2
In this case patch will be used to update the existing student with the ID of 2 It's essentially the same as the last method I specified but PUT is usually used to update an entire resource. Whereas PATCH is typically used to update only the attributes that are included in the update request. So, if you only wanted to change `phone` only that resource would be updated and everything else would be left unchanged.

action: "DELETE" location: /students/2
DELETE in this case would delete /students/2
this route calls on student id:2 and would have to define a destroy method in the StudentsController

def destroy
@student = Student.find(params[:id])
@student.destroy
  end
end
this will return a 204 error, to see the actual result of this you would send a delete request to postman using localhost:3000/students/2 and sending a DELETE request

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1.) As a user I want to be able to create a new task with a description, date, which category it will fall into and a label.
2.) As a user I want to be able to view a list of all of my tasks sorted by date and urgency.
3.) As a user I want to be able to mark tasks completed.
4.) As a user I want to be able to edit descriptions, due dates, labels etc.
5.) As a user I want to be able to delete a task.
6.) As a user I want to be able to sort my tasks by dates, urgency reversed so that they are brought to the top.
7.) As a user I want to be able to filter tasks by category or labels.
8.) As a user I want to be able to set reminders for upcoming tasks and important parameters I have determined. (email, push notifications, calender reminders)
9.) as a user I want to be able to assign tasks to others who have the ability to edit data.
10.) as a user I want to be able to export my to do list with options to select the file format.