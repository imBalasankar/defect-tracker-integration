package com.sgic.login.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sgic.login.server.entities.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{
	boolean existsByEmail(String email);
}
