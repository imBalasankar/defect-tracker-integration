package com.sgic.dt.project.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgic.dt.project.server.entities.Employee_SubModule;
import com.sgic.dt.project.server.repositories.Employee_SubModuleRepository;

@Service
public class Employee_SubModuleServiceImpl implements Employee_SubModuleService{
	@Autowired
	private Employee_SubModuleRepository employee_SubModuleRepository;
	
	 @Transactional(readOnly = false)
	 public Employee_SubModule createEmployee_SubModule (Employee_SubModule employee_SubModule)
	 {
		 Employee_SubModule responseEmployee_SubModule = employee_SubModuleRepository.save(employee_SubModule);
		return responseEmployee_SubModule;
	 }
	 @Transactional(readOnly = false)
	 public List<Employee_SubModule> getAllEmployee_SubModules() 
	 {
		 List <Employee_SubModule> employee_SubModules = 	employee_SubModuleRepository.findAll();
		 return employee_SubModules;
	 }
	 @Transactional(readOnly = false)
	 public Employee_SubModule getEmployee_SubModuleById(Long id) 
	 {
		 Employee_SubModule responseEmployee_SubModule  = employee_SubModuleRepository.findEmployee_SubModuleById(id);
		return responseEmployee_SubModule;
	 }
	 @Transactional(readOnly = false)
	 public List<Employee_SubModule> getAllByEmployeeId(Long id) 
	 {
		 List<Employee_SubModule> responseEmployee_SubModule  = employee_SubModuleRepository.findEmployee_SubModuleByEmployeeId(id);
		return responseEmployee_SubModule;
	 }
	 @Transactional(readOnly = false)
	 public Employee_SubModule updateEmployee_SubModule (Employee_SubModule employee_SubModule)
	 {
		 Employee_SubModule responseEmployee_SubModule = employee_SubModuleRepository.save(employee_SubModule);
		return responseEmployee_SubModule;
	 }
	 @Transactional(readOnly = false)
	 public boolean deleteEmployee_SubModule(Long id) 
	 {
		 employee_SubModuleRepository.deleteById(id);
		return true;
	 }
	 
	//Check whether a Employee exist on a Employee_SubModule
	 public boolean isEmployeeIdExist(Long id) {
		 return employee_SubModuleRepository.existsByEmployeeId(id);
	 }
	 
	 //Get Employee_SubModule by SubModule
	 public List<Employee_SubModule> getAllBySubModuleId(Long id){
		 return employee_SubModuleRepository.findEmployee_SubModuleBySubModuleId(id);
	 }
	 
	//Get Employee_SubModule by Project
	 public List<Employee_SubModule> getAllByProjectId(Long id){
		 return employee_SubModuleRepository.findEmployee_SubModuleByProjectId(id);
	 }
	 
	//Get Employee_SubModule by Module
	 public List<Employee_SubModule> getAllByModuleId(Long id){
		return employee_SubModuleRepository.findEmployee_SubModuleByModuleId(id);
	 }
	 
	//Check whether a SubModule exist on a Employee_SubModule
	 public boolean isSubModuleIdExist(Long id) {
		 return employee_SubModuleRepository.existsBySubModuleId(id);
	 }	 

}
