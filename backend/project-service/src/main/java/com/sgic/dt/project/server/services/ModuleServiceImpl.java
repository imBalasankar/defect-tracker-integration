package com.sgic.dt.project.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgic.dt.project.server.entities.Module;
import com.sgic.dt.project.server.repositories.ModuleRepository;

@Service
public class ModuleServiceImpl implements ModuleService{
	@Autowired
	private ModuleRepository moduleRepository;
	
	 @Transactional(readOnly = false)
	 public Module createModule (Module module)
	 {
		Module responseModule = moduleRepository.save(module);
		return responseModule;
	 }
	 @Transactional(readOnly = false)
	 public List<Module> getAllModules() 
	 {
		 List <Module> modules = 	moduleRepository.findAll();
		 return modules;
	 }
	 @Transactional(readOnly = false)
	 public Module getModuleById(Long id) 
	 {
		Module responseModule  = moduleRepository.findModuleById(id);
		return responseModule;
	 }
	 @Transactional(readOnly = false)
	 public Module updateModule (Module module)
	 {
		Module responseModule = moduleRepository.save(module);
		return responseModule;
	 }
	 @Transactional(readOnly = false)
	 public boolean deleteModule(Long id) 
	 {
		moduleRepository.deleteById(id);
		return true;
	 }
	 //================== GET ALL MODULES BY PROJECT ID ===================//
	 public List<Module> getAllModulesByProjectId(Long id) 
	 {
		 List <Module> modules = moduleRepository.findModulesByProjectId(id);
		 return modules;
	 }
	 
	 public boolean isProjectIdExist(Long projectId) {
		 return moduleRepository.existsByProjectId(projectId);
	 }

}
