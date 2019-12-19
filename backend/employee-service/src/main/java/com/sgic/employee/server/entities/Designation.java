package com.sgic.employee.server.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "employee-service", name = "designation")
public class Designation {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String designationName;
	private String responsibilities;
	
	// CONSTRUCTOR =======================================================================================================
	
	public Designation(Long id, String designationName, String responsibilities) {
		super();
		this.id = id;
		this.designationName = designationName;
		this.responsibilities = responsibilities;
	}

	public Designation(String designationName, String responsibilities) {
		super();
		this.designationName = designationName;
		this.responsibilities = responsibilities;
	}

	public Designation() {
		super();
	}
	
	// CONSTRUCTOR END ===================================================================================================

	// GETTER AND SETTER =================================================================================================

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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}	
	
	// GETTER AND SETTER END =============================================================================================

}
