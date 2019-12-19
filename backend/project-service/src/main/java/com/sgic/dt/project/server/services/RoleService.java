package com.sgic.dt.project.server.services;

import java.util.List;

import com.sgic.dt.project.server.entities.Role;

public interface RoleService {
	public Role createRole (Role role);
	public List<Role> getAllRoles();
	public Role getRoleById(Long id);
	public Role updateRole (Role Role);
	public boolean deleteRole(Long id);
	
}
