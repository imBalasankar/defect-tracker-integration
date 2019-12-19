package com.sgic.dt.project.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgic.dt.project.server.entities.SubModule;

import com.sgic.dt.project.server.repositories.SubModuleRepository;

@Service
public class SubModuleServiceImpl implements SubModuleService{
	@Autowired
	private SubModuleRepository subModuleRepository;
	
	 @Transactional(readOnly = false)
	 public SubModule createSubModule (SubModule subModule)
	 {
		 SubModule responseSubModule = subModuleRepository.save(subModule);
		return responseSubModule;
	 }
	 @Transactional(readOnly = false)
	 public List<SubModule> getAllSubModules() 
	 {
		 List <SubModule> subModules = 	subModuleRepository.findAll();
		 return subModules;
	 }
	 @Transactional(readOnly = false)
	 public SubModule getSubModuleById(Long id) 
	 {
		SubModule responseSubModule  = subModuleRepository.findSubModuleById(id);
		return responseSubModule;
	 }
	 @Transactional(readOnly = false)
	 public SubModule updateSubModule (SubModule subModule)
	 {
		 SubModule responseSubModule = subModuleRepository.save(subModule);
		return responseSubModule;
	 }
	 @Transactional(readOnly = false)
	 public boolean deleteSubModule(Long id) 
	 {
		 subModuleRepository.deleteById(id);
		return true;
	 }
	 //================== GET ALL SUBMODULES BY PROJECT ID ===================//
	 public List<SubModule> getAllSubModulesByProjectId(Long id) 
	 {
		 List <SubModule> subModules = subModuleRepository.findSubModulesByProjectId(id);
		 return subModules;
	 }
	 //================== GET ALL SUBMODULES BY MODULE ID ===================//
	 public List<SubModule> getAllSubModulesByModuleId(Long id) 
	 {
		 List <SubModule> subModules = subModuleRepository.findSubModulesByModuleId(id);
		 return subModules;
	 }
	 
	 public boolean isModuleIdExist(Long moduleId) {
		 return subModuleRepository.existsByModuleId(moduleId);
	 }

}
