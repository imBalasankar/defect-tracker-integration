package com.sgic.defect.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.defect.server.entities.Type;

public interface TypeRepository extends JpaRepository<Type, Long>{
	
}
