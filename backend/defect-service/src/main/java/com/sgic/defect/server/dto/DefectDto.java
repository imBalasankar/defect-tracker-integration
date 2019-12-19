package com.sgic.defect.server.dto;

import java.time.LocalDateTime;

public class DefectDto {
	private Long id;
	private String name;
	private String description;
	private Long projectId;
	private String projectName;
	private Long moduleId;
	private String moduleName;
	private Long submoduleId;
	private String submoduleName;
	private Long typeId;
	private String typeName;
	private Long severityId;
	private String severityName;
	private Long priorityId;
	private String priorityName;
	private Long statusId;
	private String statusName;
	private String attachment;
	private String stepsToCreate;
	private String foundIn;
	private String fixedIn;
	private Long assignedTo;
	private String assignedToName;
	private Long assignedBy;
	private String assignedByName;
	private Long createdBy;
	private String createdByName;
	private LocalDateTime createdOn;	
	private Long updatedBy;
	private String updatedByName;
	private LocalDateTime updatedOn;
	
	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getDescription() {
		return description;
	}
	public Long getProjectId() {
		return projectId;
	}
	public String getProjectName() {
		return projectName;
	}
	public Long getModuleId() {
		return moduleId;
	}
	public String getModuleName() {
		return moduleName;
	}
	public Long getSubmoduleId() {
		return submoduleId;
	}
	public String getSubmoduleName() {
		return submoduleName;
	}
	public Long getTypeId() {
		return typeId;
	}
	public String getTypeName() {
		return typeName;
	}
	public Long getSeverityId() {
		return severityId;
	}
	public String getSeverityName() {
		return severityName;
	}
	public Long getPriorityId() {
		return priorityId;
	}
	public String getPriorityName() {
		return priorityName;
	}
	public Long getStatusId() {
		return statusId;
	}
	public String getStatusName() {
		return statusName;
	}
	public String getAttachment() {
		return attachment;
	}
	public String getStepsToCreate() {
		return stepsToCreate;
	}
	public String getFoundIn() {
		return foundIn;
	}
	public String getFixedIn() {
		return fixedIn;
	}
	public Long getAssignedTo() {
		return assignedTo;
	}
	public String getAssignedToName() {
		return assignedToName;
	}
	public Long getAssignedBy() {
		return assignedBy;
	}
	public String getAssignedByName() {
		return assignedByName;
	}
	public Long getCreatedBy() {
		return createdBy;
	}
	public String getCreatedByName() {
		return createdByName;
	}
	public LocalDateTime getCreatedOn() {
		return createdOn;
	}
	public Long getUpdatedBy() {
		return updatedBy;
	}
	public String getUpdatedByName() {
		return updatedByName;
	}
	public LocalDateTime getUpdatedOn() {
		return updatedOn;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public void setModuleId(Long moduleId) {
		this.moduleId = moduleId;
	}
	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}
	public void setSubmoduleId(Long submoduleId) {
		this.submoduleId = submoduleId;
	}
	public void setSubmoduleName(String submoduleName) {
		this.submoduleName = submoduleName;
	}
	public void setTypeId(Long typeId) {
		this.typeId = typeId;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public void setSeverityId(Long severityId) {
		this.severityId = severityId;
	}
	public void setSeverityName(String severityName) {
		this.severityName = severityName;
	}
	public void setPriorityId(Long priorityId) {
		this.priorityId = priorityId;
	}
	public void setPriorityName(String priorityName) {
		this.priorityName = priorityName;
	}
	public void setStatusId(Long statusId) {
		this.statusId = statusId;
	}
	public void setStatusName(String statusName) {
		this.statusName = statusName;
	}
	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}
	public void setStepsToCreate(String stepsToCreate) {
		this.stepsToCreate = stepsToCreate;
	}
	public void setFoundIn(String foundIn) {
		this.foundIn = foundIn;
	}
	public void setFixedIn(String fixedIn) {
		this.fixedIn = fixedIn;
	}
	public void setAssignedTo(Long assignedTo) {
		this.assignedTo = assignedTo;
	}
	public void setAssignedToName(String assignedToName) {
		this.assignedToName = assignedToName;
	}
	public void setAssignedBy(Long assignedBy) {
		this.assignedBy = assignedBy;
	}
	public void setAssignedByName(String assignedByName) {
		this.assignedByName = assignedByName;
	}
	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}
	public void setCreatedByName(String createdByName) {
		this.createdByName = createdByName;
	}
	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}
	public void setUpdatedBy(Long updatedBy) {
		this.updatedBy = updatedBy;
	}
	public void setUpdatedByName(String updatedByName) {
		this.updatedByName = updatedByName;
	}
	public void setUpdatedOn(LocalDateTime updatedOn) {
		this.updatedOn = updatedOn;
	}
		
}
