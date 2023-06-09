**User Routes:**

1. Create a new user:
   - Route: `POST /api/users`
   - Request body:
     ```json
     {
       "username": "user1",
       "password": "password1",
       "Hobbies": [1, 2, 3]
     }
     ```

2. Retrieve all users:
   - Route: `GET /api/users`

3. Retrieve a specific user by ID:
   - Route: `GET /api/users/:id`
   - Replace `:id` with the ID of the user you want to retrieve.

4. Update a specific user by ID:
   - Route: `PUT /api/users/:id`
   - Replace `:id` with the ID of the user you want to update.
   - Request body:
     ```json
     {
       "username": "updated_user1",
       "password": "updated_password1",
       "Hobbies": [1, 3]
     }
     ```

5. Delete a specific user by ID:
   - Route: `DELETE /api/users/:id`
   - Replace `:id` with the ID of the user you want to delete.

**Group Routes:**

1. Create a new group:
   - Route: `POST /api/groups`
   - Request body:
     ```json
     {
       "group_name": "Group 1",
       "description": "This is group 1"
     }
     ```

2. Retrieve all groups:
   - Route: `GET /api/groups`

3. Retrieve a specific group by ID:
   - Route: `GET /api/groups/:id`
   - Replace `:id` with the ID of the group you want to retrieve.

4. Update a specific group by ID:
   - Route: `PUT /api/groups/:id`
   - Replace `:id` with the ID of the group you want to update.
   - Request body:
     ```json
     {
       "group_name": "Updated Group 1",
       "description": "This is the updated group 1"
     }
     ```

5. Delete a specific group by ID:
   - Route: `DELETE /api/groups/:id`
   - Replace `:id` with the ID of the group you want to delete.

**Hobby Routes:**

1. Create a new hobby:
   - Route: `POST /api/hobbies`
   - Request body:
     ```json
     {
       "hobby_name": "Hobby 1",
       "description": "This is hobby 1"
     }
     ```

2. Retrieve all hobbies:
   - Route: `GET /api/hobbies`

3. Retrieve a specific hobby by ID:
   - Route: `GET /api/hobbies/:id`
   - Replace `:id` with the ID of the hobby you want to retrieve.

4. Update a specific hobby by ID:
   - Route: `PUT /api/hobbies/:id`
   - Replace `:id` with the ID of the hobby you want to update.
   - Request body:
     ```json
     {
       "hobby_name": "Updated Hobby 1",
       "description": "This is the updated hobby 1"
     }
     ```

5. Delete a specific hobby by ID:
   - Route: `DELETE /api/hobbies/:id`
   - Replace `:id` with the ID of the hobby you want to delete.

**Tag Routes:**

1. Create a new tag:
   - Route: `POST /api/tags`
   - Request body:
     ```json
     {
       "tag_name

": "Tag 1",
       "description": "This is tag 1"
     }
     ```

2. Retrieve all tags:
   - Route: `GET /api/tags`

3. Retrieve a specific tag by ID:
   - Route: `GET /api/tags/:id`
   - Replace `:id` with the ID of the tag you want to retrieve.

4. Update a specific tag by ID:
   - Route: `PUT /api/tags/:id`
   - Replace `:id` with the ID of the tag you want to update.
   - Request body:
     ```json
     {
       "tag_name": "Updated Tag 1",
       "description": "This is the updated tag 1"
     }
     ```

5. Delete a specific tag by ID:
   - Route: `DELETE /api/tags/:id`
   - Replace `:id` with the ID of the tag you want to delete.

**Hobby has Tags Routes:**

1. Add tags to a hobby:
   - Route: `POST /api/hobbies/:hobbyId/tags`
   - Replace `:hobbyId` with the ID of the hobby to which you want to add tags.
   - Request body:
     ```json
     {
       "tagIds": [1, 2, 3] // Array of tag IDs to associate with the hobby
     }
     ```

2. Remove tags from a hobby:
   - Route: `DELETE /api/hobbies/:hobbyId/tags/:tagId`
   - Replace `:hobbyId` with the ID of the hobby from which you want to remove a tag.
   - Replace `:tagId` with the ID of the tag you want to remove.

3. Get all tags for a hobby:
   - Route: `GET /api/hobbies/:hobbyId/tags`
   - Replace `:hobbyId` with the ID of the hobby for which you want to retrieve tags.

4. Get a specific tag associated with a hobby:
   - Route: `GET /api/hobbies/:hobbyId/tags/:tagId`
   - Replace `:hobbyId` with the ID of the hobby.
   - Replace `:tagId` with the ID of the tag you want to retrieve.

5. Update tags associated with a hobby:
   - Route: `PUT /api/hobbies/:hobbyId/tags`
   - Replace `:hobbyId` with the ID of the hobby.
   - Request body:
     ```json
     {
       "tagIds": [1, 2, 3] // Updated array of tag IDs to associate with the hobby
     }
     ```

**User has Groups Routes:**

1. Add groups to a user:
   - Route: `POST /api/users/:userId/groups`
   - Replace `:userId` with the ID of the user to whom you want to add groups.
   - Request body:
     ```json
     {
       "groupIds": [1, 2, 3] // Array of group IDs to associate with the user
     }
     ```

2. Remove a group from a user:
   - Route: `DELETE /api/users/:userId/groups/:groupId`
   - Replace `:userId` with the ID of the user from whom you want to remove a group.
   - Replace `:groupId` with the ID of the group you want to remove.

3. Get all groups for a user:
   - Route: `GET /api/users/:userId/groups`
   - Replace `:userId` with the ID of the user for which you want to retrieve groups.

4. Get a specific group associated with a user:
   - Route

: `GET /api/users/:userId/groups/:groupId`
   - Replace `:userId` with the ID of the user.
   - Replace `:groupId` with the ID of the group you want to retrieve.

5. Update groups associated with a user:
   - Route: `PUT /api/users/:userId/groups`
   - Replace `:userId` with the ID of the user.
   - Request body:
     ```json
     {
       "groupIds": [1, 2, 3] // Updated array of group IDs to associate with the user
     }
     ```

**User has Hobbies Routes:**

1. Add hobbies to a user:
   - Route: `POST /api/users/:userId/hobbies`
   - Replace `:userId` with the ID of the user to whom you want to add hobbies.
   - Request body:
     ```json
     {
       "hobbyIds": [1, 2, 3] // Array of hobby IDs to associate with the user
     }
     ```

2. Remove a hobby from a user:
   - Route: `DELETE /api/users/:userId/hobbies/:hobbyId`
   - Replace `:userId` with the ID of the user from whom you want to remove a hobby.
   - Replace `:hobbyId` with the ID of the hobby you want to remove.

3. Get all hobbies for a user:
   - Route: `GET /api/users/:userId/hobbies`
   - Replace `:userId` with the ID of the user for which you want to retrieve hobbies.

4. Get a specific hobby associated with a user:
   - Route: `GET /api/users/:userId/hobbies/:hobbyId`
   - Replace `:userId` with the ID of the user.
   - Replace `:hobbyId` with the ID of the hobby you want to retrieve.

5. Update hobbies associated with a user:
   - Route: `PUT /api/users/:userId/hobbies`
   - Replace `:userId` with the ID of the user.
   - Request body:
     ```json
     {
       "hobbyIds": [1, 2, 3] // Updated array of hobby IDs to associate with the user
     }
     ```