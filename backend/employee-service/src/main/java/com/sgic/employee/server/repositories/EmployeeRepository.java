package com.sgic.employee.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.employee.server.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
	boolean existsByEmail(String email);

	Employee findEmployeeById(Long id);

	List<Employee> findEmployeeByDesignationId(Long designationId);
	
	boolean existsByUsername(String username);
	
	boolean existsByDesignationId(Long id);
}
