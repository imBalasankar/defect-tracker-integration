package com.sgic.defect.server.dto;

import java.time.LocalDateTime;

public class DefectLogDto {
	private Long id;
	private Long defectId;
	private String name;
	private Long statusId;
	private String statusName;
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
	public Long getDefectId() {
		return defectId;
	}
	public String getName() {
		return name;
	}
	public Long getStatusId() {
		return statusId;
	}
	public String getStatusName() {
		return statusName;
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
	public void setDefectId(Long defectId) {
		this.defectId = defectId;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setStatusId(Long statusId) {
		this.statusId = statusId;
	}
	public void setStatusName(String statusName) {
		this.statusName = statusName;
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
