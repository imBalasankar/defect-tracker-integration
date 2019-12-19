package com.sgic.common.api.response;

import com.sgic.common.api.enums.RestApiResponseStatus;

/**
 * 
 * This base class contains all the common attributes that any REST web service response should contain. All the REST
 * web service Response classes should extend this!
 *
 */

	public class ApiResponse {
	
		public static final ApiResponse OK = new ApiResponse(RestApiResponseStatus.OK);

		private Integer statusCode;
	  
		private String message;
	
	  public ApiResponse(RestApiResponseStatus restApiResponseStatus) {
	    this.statusCode = restApiResponseStatus.getCode();
	    this.message = restApiResponseStatus.getMessage();
	  }  
	
	  public Integer getStatusCode() {
	    return statusCode;
	  }
	
	  public void setStatusCode(Integer statusCode) {
	    this.statusCode = statusCode;
	  }
	
	  public String getMessage() {
		return message;
	  }
	
	  public void setMessage(String message) {
		this.message = message;
	  }

  
}
