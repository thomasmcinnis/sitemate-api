# create and issue
POST http://localhost:3001/api/issues/
{
  "title": "another issue",
  "description": "This is another issue"
}
HTTP 201
[Captures]
issueId: jsonpath "$['id']"

# Get the just created issue
GET http://localhost:3001/api/issues/{{issueId}}
HTTP 200

# Update the just created issue
PUT http://localhost:3001/api/issues/{{issueId}}
{
  "title": "this is the updated title",
  "description": "Enjoy this new description"
}
HTTP 200

# Delete the just created issue
DELETE http://localhost:3001/api/issues/{{issueId}}
HTTP 200

