package com.sgic.common.api.enums;

public enum RestApiResponseStatus {

	OK(20000, "OK"),
	
	CREATED(20100, "Record Successfully Created"),
	UPDATED(20200, "Record Successfully Updated"),
	DELETED(20300, "Record Successfully Deleted"),
	RECEIVED(20400, "Record(s) Successfully Received"),
	ALLOCATED(20500, "Employee Successfully Allocated"),
	DE_ALLOCATED(20600, "Employee Successfully Deallocated"),
	
	VALIDATION_FAILURE(40000, "VALIDATION_FAILURE"),
	VF_EMAIL(40001, "Email Already Exists"),
	VF_UNAME(40002, "Username Already Exists"),
	
	NOT_FOUND(40400, "Id Not Found"),
	FORBIDDEN(40300, "FORBIDDEN"),
	ERROR(50000, "ERROR"),
	
	DELETION_FAILURE(50001, "Unable to Delete - Check for any Dependency"),
	PAF_MAXIMUM(50002, "Unable to Allocate - Already Maximum Projects Allocated"),
	SAF_MAXIMUM(50003, "Unable to Allocate - Already Maximum Submodules Allocated"),
	PAF_SAME(50004, "This Project Already Allocated to the Same Employee"),
	SAF_SAME(50005, "This Submodule Already Allocated to the Same Employee");

   private Integer code;
   
   private String message;
  
   private RestApiResponseStatus(Integer code, String message) {
	   this.code = code;
	   this.message = message;
   }
  
  	public Integer getCode() {
		return code;
	}

	public String getMessage() {
		return message;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public void setMessage(String message) {
		this.message = message;
	}
 
	@Override
	public String toString() {
		return code + ":" + message;
	}

}
