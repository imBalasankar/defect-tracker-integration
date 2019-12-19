package com.sgic.login.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgic.login.server.entities.Users;
import com.sgic.login.server.repositories.UsersRepository;

@Service
public class UsersProjectRoleServiceImpl implements UsersProjectRoleService{
	
	@Autowired
	private UsersRepository loginRepository;
	
    @Transactional(readOnly = false)
	public Users createEmployee(Users login) {
		Users responseEmployee = loginRepository.save(login);
		return responseEmployee;
	}

    @Transactional(readOnly = true)
	public boolean isEmailAlreadyExist(String email) {
		return loginRepository.existsByEmail(email);
	}
	
	

}
