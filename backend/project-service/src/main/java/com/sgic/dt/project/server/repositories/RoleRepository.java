package com.sgic.dt.project.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.dt.project.server.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
	Role findRoleById(Long id);

}