package com.sgic.dt.project.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.dt.project.server.entities.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{
	Project findProjectById(Long id);
	long countByStatus(String status);	
	boolean existsByClientId(Long id);
	
}