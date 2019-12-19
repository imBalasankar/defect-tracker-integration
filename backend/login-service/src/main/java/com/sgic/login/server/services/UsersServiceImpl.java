package com.sgic.login.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgic.login.server.repositories.UsersRepository;

@Service
public class UsersServiceImpl implements UsersService{
	
	@Autowired
	private UsersRepository loginRepository;
	
   

    @Transactional(readOnly = true)
	public boolean isEmailAlreadyExist(String email) {
		return loginRepository.existsByEmail(email);
	}
	
	

}
