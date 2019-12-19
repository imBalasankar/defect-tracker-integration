package com.sgic.dt.project.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.dt.project.server.entities.SubModule;


public interface SubModuleRepository extends JpaRepository<SubModule, Long>{
	SubModule findSubModuleById(Long id);
	SubModule findSubModuleByProjectId(Long id);
	List<SubModule> findSubModulesByProjectId(Long projectId);
	List<SubModule> findSubModulesByModuleId(Long moduleId);
	boolean existsByModuleId(Long moduleId);
	
}