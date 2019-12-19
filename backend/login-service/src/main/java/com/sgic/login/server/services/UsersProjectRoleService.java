package com.sgic.login.server.services;

import com.sgic.login.server.entities.Users;

public interface UsersProjectRoleService {
public Users createEmployee(Users employee);
public boolean isEmailAlreadyExist(String email);
}
