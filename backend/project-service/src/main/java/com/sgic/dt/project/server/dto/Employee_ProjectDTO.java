package com.sgic.dt.project.server.dto;

import java.time.LocalDateTime;

public class Employee_ProjectDTO {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	private Long id;
	
	private Long employeeId;
	private String employeeLastName;
	private String employeeName;
	private String employeeFirstName;
	private String employeeDesignation;
	
	private Long projectId;
	private String projectName;
	private String projectDescription;
	private String status;
	
	private Long roleId;
	private String roleName;
	
	private String moduleName;
	
	private String subModuleName;
	
	private Integer subModuleAvailability;
	
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
	public String getEmployeeLastName() {
		return employeeLastName;
	}
	public void setEmployeeLastName(String employeeLastName) {
		this.employeeLastName = employeeLastName;
	
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getEmployeeFirstName() {
		return employeeFirstName;
	}
	public void setEmployeeFirstName(String employeeFirstName) {
		this.employeeFirstName = employeeFirstName;
	}
	public String getEmployeeDesignation() {
		return employeeDesignation;
	}
	public void setEmployeeDesignation(String employeeDesignation) {
		this.employeeDesignation = employeeDesignation;
	}
	public Long getProjectId() {
		return projectId;
	}
	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getProjectDescription() {
		return projectDescription;
	}
	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Long getRoleId() {
		return roleId;
	}
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
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
	
	public String getModuleName() {
		return moduleName;
	}
	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}
	public String getSubModuleName() {
		return subModuleName;
	}
	public void setSubModuleName(String subModuleName) {
		this.subModuleName = subModuleName;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Integer getSubModuleAvailability() {
		return subModuleAvailability;
	}
	public void setSubModuleAvailability(Integer subModuleAvailability) {
		this.subModuleAvailability = subModuleAvailability;
	}	
	
	//================================================//
	
	
}