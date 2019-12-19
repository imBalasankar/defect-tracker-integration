package com.sgic.dt.project.server.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;



@Entity
@Table(schema = "project-service", name = "employee_project")

public class Employee_Project {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long employeeId;
	
	private Long projectId;
	
	private Long roleId;
	
	@CreationTimestamp
	private LocalDateTime allocateDate;
	private LocalDateTime deallocateDate;


	
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
	public Long getProjectId() {
		return projectId;
	}
	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}
	public Long getRoleId() {
		return roleId;
	}
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	public LocalDateTime getAllocateDate() {
		return allocateDate;
	}
	public void setAllocateDate(LocalDateTime allocateDate) {
		this.allocateDate = allocateDate;
	}
	public LocalDateTime getDeallocateDate() {
		return deallocateDate;
	}
	public void setDeallocateDate(LocalDateTime deallocateDate) {
		this.deallocateDate = deallocateDate;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	//================================================//
	
	
}
