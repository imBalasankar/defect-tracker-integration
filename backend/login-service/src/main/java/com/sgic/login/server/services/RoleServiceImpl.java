package com.sgic.login.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgic.login.server.entities.Role;
import com.sgic.login.server.entities.Users;
import com.sgic.login.server.repositories.RoleRepository;
import com.sgic.login.server.repositories.UsersRepository;

@Service
public class RoleServiceImpl implements RoleService{
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Override
    @Transactional(readOnly = false)
	public List<Role> getRole() {
		List<Role> responseRole = roleRepository.findAll();
		return responseRole;
	}

	
	

   

}
