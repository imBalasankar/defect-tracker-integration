package com.sgic.dt.project.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.dt.project.server.entities.Employee_SubModule;

public interface Employee_SubModuleRepository extends JpaRepository<Employee_SubModule, Long>{
	Employee_SubModule findEmployee_SubModuleById(Long id);
	List<Employee_SubModule> findEmployee_SubModuleByEmployeeId(Long employeeId);
	List<Employee_SubModule> findEmployee_SubModuleBySubModuleId(Long subModuleId);
	List<Employee_SubModule> findEmployee_SubModuleByProjectId(Long projectId);
	List<Employee_SubModule> findEmployee_SubModuleByModuleId(Long moduleId);
	Employee_SubModule findSubModuleById(Long subModuleId);
	boolean existsByEmployeeId(Long id);
	boolean existsBySubModuleId(Long id);
}
