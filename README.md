# Intern app
```
## Route

#### Route auth
- [POST]: http://localhost:3000/auth/signup
                                           + email(*): String
                                           + username (*):String
                                           + password (*):String
                                           + role_id (*): Integer
                                           + group_id(*): Integer
- [POST]: http://localhost:3000/auth/login  
                     + username(*):String
                     + password(*):String
#### Route lineitem
- [GET] : http://localhost:3000/lineitem/:uuid
#### Route groups (chỉ những user có role tên là admin mới có quyền truy cập)
- [GET] : http://localhost:3000/groups
- [GET] : http://localhost:3000/groups/:id
- [POST] : http://localhost:3000/groups/create 
                                              + name(*): String
                                              + status : Integer
                                              + parent_group_id: Integer
                                              + description: String
- [PATCH] : http://localhost:3000/groups/:id 
                                              + name(*): String
                                              + status : Integer
                                              + parent_group_id: Integer
                                              + description: String
- [PATCH] : http://localhost:3000/groups/delete/:id
- [PATCH] : http://localhost:3000/groups/undodelete/:id

#### Route users (chỉ những user có role tên là admin mới có quyền truy cập)
- [GET] : http://localhost:3000/users
- [GET] : http://localhost:3000/users/:id
- [POST] : http://localhost:3000/users/create 
                                           + email(*): String
                                           + username (*):String
                                           + password (*):String
                                           + role_id (*): Integer
                                           + group_id(*): Integer
                                           + status : Integer
                                           + description: String
                                           + user_owner_id : Integer
                                           
- [PATCH] : http://localhost:3000/users/:id 
                                           + email(*): String
                                           + username (*):String
                                           + password (*):String
                                           + role_id (*): Integer
                                           + group_id(*): Integer
                                           + status : Integer
                                           + description: String
                                           + user_owner_id : Integer
- [PATCH] : http://localhost:3000/users/delete/:id
- [PATCH] : http://localhost:3000/users/undodelete/:id
- [DELETE] : http://localhost:3000/users/deleted/:id

#### Route roles (chỉ những user có role tên là admin mới có quyền truy cập)
- [GET] : http://localhost:3000/roles
- [GET] : http://localhost:3000/roles/:id
- [POST] : http://localhost:3000/roles/create 
                                              + name(*): String
                                              + status : Integer
                                              + description: String
- [PATCH] : http://localhost:3000/roles/:id 
                                              + name(*): String
                                              + status : Integer
                                              + description: String
- [PATCH] : http://localhost:3000/roles/delete/:id
- [PATCH] : http://localhost:3000/roles/undodelete/:id

#### Route user (Sau khi login thành công thì user nào cũng có quyền truy cập)
- [GET] : http://localhost:3000/user
- [PATCH] : http://localhost:3000/user/patch
 
```
 
  
  
