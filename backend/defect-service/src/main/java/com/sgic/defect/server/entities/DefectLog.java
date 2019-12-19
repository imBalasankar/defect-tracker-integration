package com.sgic.defect.server.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Table(schema = "defect-service", name = "defectlog")
public class DefectLog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long defectLogId;
	@NotNull
	private Long id;
	@NotNull
	private String name;
	@NotNull
	private Long statusId;
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
	
	public DefectLog() {
		
	}

	public DefectLog(Long defectLogId, @NotNull Long id, @NotNull String name, @NotNull Long statusId,
			@NotNull Long assignedTo, @NotNull Long assignedBy, @NotNull Long createdBy, LocalDateTime createdOn,
			Long updatedBy, LocalDateTime updatedOn) {
		super();
		this.defectLogId = defectLogId;
		this.id = id;
		this.name = name;
		this.statusId = statusId;
		this.assignedTo = assignedTo;
		this.assignedBy = assignedBy;
		this.createdBy = createdBy;
		this.createdOn = createdOn;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
	}

	public Long getDefectLogId() {
		return defectLogId;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Long getStatusId() {
		return statusId;
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

	public void setDefectLogId(Long defectLogId) {
		this.defectLogId = defectLogId;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setStatusId(Long statusId) {
		this.statusId = statusId;
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

