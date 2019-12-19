package com.sgic.defect.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.defect.server.entities.Priority;

public interface PriorityRepository extends JpaRepository<Priority, Long>{
	
}
