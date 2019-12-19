package com.sgic.dt.project.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgic.dt.project.server.entities.Role;
import com.sgic.dt.project.server.repositories.RoleRepository;

@Service
public class RoleServiceImpl implements RoleService{
	@Autowired
	private RoleRepository roleRepository;
	
	 @Transactional(readOnly = false)
	 public Role createRole (Role role)
	 {
		 Role responseRole = roleRepository.save(role);
		return responseRole;
	 }
	 @Transactional(readOnly = false)
	 public List<Role> getAllRoles() 
	 {
		 List <Role> roles = 	roleRepository.findAll();
		 return roles;
	 }
	 @Transactional(readOnly = false)
	 public Role getRoleById(Long id) 
	 {
		 Role responseRole  = roleRepository.findRoleById(id);
		return responseRole;
	 }
	 @Transactional(readOnly = false)
	 public Role updateRole (Role role)
	 {
		 Role responseRole = roleRepository.save(role);
		return responseRole;
	 }
	 @Transactional(readOnly = false)
	 public boolean deleteRole(Long id) 
	 {
		 roleRepository.deleteById(id);
		return true;
	 }

}
