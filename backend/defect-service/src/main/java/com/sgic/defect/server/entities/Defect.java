package com.sgic.defect.server.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Table(schema = "defect-service", name = "defect")
public class Defect {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String name;
	@NotNull
	private String description;
	@NotNull
	private Long projectId;
	@NotNull
	private Long moduleId;
	@NotNull
	private Long submoduleId;
	@NotNull
	private Long typeId;
	@NotNull
	private Long severityId;
	@NotNull
	private Long priorityId;
	@NotNull
	private Long statusId;
	@Lob
	@Column
	private String attachment;
	@NotNull
	private String stepsToCreate;
	@NotNull
	private String foundIn;
	private String fixedIn;
	@NotNull
	private Long assignedTo;
	@NotNull
	private Long assignedBy;
	@NotNull
	private Long createdBy;
	@CreationTimestamp
	private LocalDateTime createdOn;
	private Long updatedBy;
	@UpdateTimestamp
	private LocalDateTime updatedOn;

	public Defect() {

	}

	public Defect(Long id, String name, String description, Long projectId, Long moduleId, Long submoduleId, Long typeId,
			Long severityId, Long priorityId, Long statusId, String attachment, String stepsToCreate, String foundIn,
			String fixedIn, Long assignedTo, Long assignedBy, Long createdBy, LocalDateTime createdOn, Long updatedBy,
			LocalDateTime updatedOn) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.projectId = projectId;
		this.moduleId = moduleId;
		this.submoduleId = submoduleId;
		this.typeId = typeId;
		this.severityId = severityId;
		this.priorityId = priorityId;
		this.statusId = statusId;
		this.attachment = attachment;
		this.stepsToCreate = stepsToCreate;
		this.foundIn = foundIn;
		this.fixedIn = fixedIn;
		this.assignedTo = assignedTo;
		this.assignedBy = assignedBy;
		this.createdBy = createdBy;
		this.createdOn = createdOn;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
	}

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
	
	public Long getModuleId() {
		return moduleId;
	}
	
	public Long getSubmoduleId() {
		return submoduleId;
	}
	
	public Long getTypeId() {
		return typeId;
	}
	
	public Long getSeverityId() {
		return severityId;
	}
	
	public Long getPriorityId() {
		return priorityId;
	}
	
	public Long getStatusId() {
		return statusId;
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
	
	public Long getAssignedBy() {
		return assignedBy;
	}
	
	public Long getCreatedBy() {
		return createdBy;
	}
	
	public LocalDateTime getCreatedOn() {
		return createdOn;
	}
	
	public Long getUpdatedBy() {
		return updatedBy;
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
	
	public void setModuleId(Long moduleId) {
		this.moduleId = moduleId;
	}
	
	public void setSubmoduleId(Long submoduleId) {
		this.submoduleId = submoduleId;
	}
	
	public void setTypeId(Long typeId) {
		this.typeId = typeId;
	}
	
	public void setSeverityId(Long severityId) {
		this.severityId = severityId;
	}
	
	public void setPriorityId(Long priorityId) {
		this.priorityId = priorityId;
	}
	
	public void setStatusId(Long statusId) {
		this.statusId = statusId;
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
	
	public void setAssignedBy(Long assignedBy) {
		this.assignedBy = assignedBy;
	}
	
	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}
	
	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}
	
	public void setUpdatedBy(Long updatedBy) {
		this.updatedBy = updatedBy;
	}
	
	public void setUpdatedOn(LocalDateTime updatedOn) {
		this.updatedOn = updatedOn;
	}

}
