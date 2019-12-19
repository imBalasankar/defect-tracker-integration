package com.sgic.dt.project.server.services;

import java.util.List;

import com.sgic.dt.project.server.entities.Employee_SubModule;


public interface Employee_SubModuleService {
	public Employee_SubModule createEmployee_SubModule (Employee_SubModule employee_SubModule);
	
	public Employee_SubModule getEmployee_SubModuleById(Long id);
	public List<Employee_SubModule> getAllByEmployeeId(Long employeeId);
	public List<Employee_SubModule> getAllBySubModuleId(Long id);
	public List<Employee_SubModule> getAllByProjectId(Long id);
	public List<Employee_SubModule> getAllByModuleId(Long id);
	public Employee_SubModule updateEmployee_SubModule (Employee_SubModule employee_SubModule);
	public boolean deleteEmployee_SubModule(Long id);
	public List<Employee_SubModule> getAllEmployee_SubModules();
	public boolean isEmployeeIdExist(Long id);
	public boolean isSubModuleIdExist(Long id);
	
}
