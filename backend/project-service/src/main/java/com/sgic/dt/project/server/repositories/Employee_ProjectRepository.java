package com.sgic.dt.project.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sgic.dt.project.server.entities.Employee_Project;

public interface Employee_ProjectRepository extends JpaRepository<Employee_Project, Long>{
	Employee_Project findEmployee_ProjectById(Long id);
	Employee_Project findEmployee_ProjectByProjectId(Long id);
	List<Employee_Project> findEmployee_ProjectsByProjectId(Long projectId);
	List<Employee_Project> findEmployee_ProjectsByEmployeeId(Long employeeId);
	
	//DELETE FROM table WHERE id
	@Query(value ="DELETE FROM employee_project ep WHERE ep.employeeId <> ?1 AND ep.projectId <> ?2",nativeQuery = true)
	void deleteByEmployeeId_ProjectId(Long employeeId,Long projectId);
	
	boolean existsByEmployeeId(Long id);
	boolean existsByRoleId(Long id);
	boolean existsByProjectId(Long id);
	
}