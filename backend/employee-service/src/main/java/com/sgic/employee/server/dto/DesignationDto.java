package com.sgic.employee.server.dto;

public class DesignationDto {
	
	private Long id;
	private String designationName;
	private String responsibilities;
	
	public DesignationDto(Long id, String designationName, String responsibilities) {
		super();
		this.id = id;
		this.designationName = designationName;
		this.responsibilities = responsibilities;
	}

	public DesignationDto(String designationName, String responsibilities) {
		super();
		this.designationName = designationName;
		this.responsibilities = responsibilities;
	}

	public DesignationDto() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDesignationName() {
		return designationName;
	}

	public void setDesignationName(String designationName) {
		this.designationName = designationName;
	}

	public String getResponsibilities() {
		return responsibilities;
	}

	public void setResponsibilities(String responsibilities) {
		this.responsibilities = responsibilities;
	}
	
	
}
