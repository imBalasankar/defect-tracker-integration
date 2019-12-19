package com.sgic.login.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sgic.login.server.entities.UsersProjectRole;

@Repository
public interface UsersProjectRoleRepository extends JpaRepository<UsersProjectRole, Long>{
}
