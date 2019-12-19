package com.sgic.dt.project.server.services;

import java.util.List;

import com.sgic.dt.project.server.entities.Employee_Project;

public interface Employee_ProjectService {
	public Employee_Project createEmployee_Project (Employee_Project employee_project);
	public List<Employee_Project> getAllEmployee_Projects();
	public Employee_Project getEmployee_ProjectById(Long id);
	public Employee_Project updateEmployee_Project (Employee_Project employee_Project);
	public boolean deleteById(Long id);
	public List<Employee_Project> getAllByProjectId(Long id);
	public List<Employee_Project> getAllByEmployeeId(Long id);
	public boolean deleteByEmployeeId_ProjectId(Long employeeId, Long projectId);
	public boolean isEmployeeIdExist(Long id);
	public boolean isRoleIdExist(Long id);
	public boolean isProjectIdExist(Long id);
	
}
