package com.sgic.employee.server.entities;

import java.time.LocalDate;
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
@Table(schema = "employee-service", name = "employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	@NotNull
	private LocalDate dateOfBirth;
	@NotNull
	private Long designationId;
	@NotNull
	private String address;
	@NotNull
	private String phoneNumber;
	@NotNull
	private String email;
	@NotNull
	private String bench;
	@Lob
	@Column
	private String photo;
	@NotNull
	private String active;
	@NotNull
	private LocalDate joinDate;
	private LocalDate leaveDate;
	@NotNull
	private String username;
	@NotNull
	private String password;
	@NotNull
	private Integer availability;
	@NotNull
	private Integer subModuleAvailability;
	private String remarks;
	@CreationTimestamp
	private LocalDateTime createdOn;
	@UpdateTimestamp
	private LocalDateTime updatedOn;
	
	public Employee() {
		
	}

	public Employee(Long id, @NotNull String firstName, @NotNull String lastName, @NotNull LocalDate dateOfBirth,
			@NotNull Long designationId, @NotNull String address, @NotNull String phoneNumber, @NotNull String email,
			@NotNull String bench, String photo, @NotNull String active, @NotNull LocalDate joinDate,
			LocalDate leaveDate, @NotNull String username, @NotNull String password, @NotNull Integer availability,
			@NotNull Integer subModuleAvailability, String remarks, LocalDateTime createdOn, LocalDateTime updatedOn) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.designationId = designationId;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.bench = bench;
		this.photo = photo;
		this.active = active;
		this.joinDate = joinDate;
		this.leaveDate = leaveDate;
		this.username = username;
		this.password = password;
		this.availability = availability;
		this.subModuleAvailability = subModuleAvailability;
		this.remarks = remarks;
		this.createdOn = createdOn;
		this.updatedOn = updatedOn;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Long getDesignationId() {
		return designationId;
	}

	public void setDesignationId(Long designationId) {
		this.designationId = designationId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBench() {
		return bench;
	}

	public void setBench(String bench) {
		this.bench = bench;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public LocalDate getJoinDate() {
		return joinDate;
	}

	public void setJoinDate(LocalDate joinDate) {
		this.joinDate = joinDate;
	}

	public LocalDate getLeaveDate() {
		return leaveDate;
	}

	public void setLeaveDate(LocalDate leaveDate) {
		this.leaveDate = leaveDate;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getAvailability() {
		return availability;
	}

	public void setAvailability(Integer availability) {
		this.availability = availability;
	}

	public Integer getSubModuleAvailability() {
		return subModuleAvailability;
	}

	public void setSubModuleAvailability(Integer subModuleAvailability) {
		this.subModuleAvailability = subModuleAvailability;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public LocalDateTime getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}

	public LocalDateTime getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(LocalDateTime updatedOn) {
		this.updatedOn = updatedOn;
	}
	
}
