package com.sgic.dt.project.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.dt.project.server.entities.Module;


public interface ModuleRepository extends JpaRepository<Module, Long>{
	Module findModuleById(Long id);
	Module findModuleByProjectId(Long id);
	List<Module> findModulesByProjectId(Long projectId);
	boolean existsByProjectId(Long projectId);
}