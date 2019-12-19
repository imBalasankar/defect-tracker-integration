package com.sgic.employee.server.services;

import java.util.List;

import com.sgic.employee.server.entities.Employee;

public interface EmployeeService {

	public Employee createEmployee(Employee employee);

	public boolean isEmailAlreadyExist(String email);

	public List<Employee> getAllEmployee();

	public Employee findEmployeeById(Long id);

	public Employee updateEmployee(Employee employee);

	public boolean deleteEmployee(Long id);

	public List<Employee> findEmployeeByDesignation(Long designationId);
	
	public boolean isUsernameAlreadyExist(String username);
	
	public boolean isDesignationIdExist(Long id);
}
