package com.sgic.dt.project.server.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(schema = "project-service", name = "employee_submodule")

public class Employee_SubModule {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long employeeId;
	
	private Long projectId;
	
	private Long moduleId;
	
	private Long subModuleId;

	@CreationTimestamp
	private LocalDateTime allocateDate;
	
	
	//=================== GETTERS AND SETTERS  =================//
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}	

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public Long getSubModuleId() {
		return subModuleId;
	}

	public void setSubModuleId(Long subModuleId) {
		this.subModuleId = subModuleId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Long getModuleId() {
		return moduleId;
	}

	public void setModuleId(Long moduleId) {
		this.moduleId = moduleId;
	}
	
	public LocalDateTime getAllocateDate() {
		return allocateDate;
	}

	public void setAllocateDate(LocalDateTime allocateDate) {
		this.allocateDate = allocateDate;
	}

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	//================================================//
	
	
}
