package com.sgic.common.api.response;

import com.sgic.common.api.enums.RestApiResponseStatus;

public class BasicResponse<T> extends ApiResponse {

	public BasicResponse(RestApiResponseStatus restApiResponseStatus) {
		super(restApiResponseStatus);
	}
	
	public BasicResponse() {
		super(RestApiResponseStatus.OK);
	}
	
	public  BasicResponse(T responseBody, RestApiResponseStatus restApiResponseStatus, String message) {
		super(restApiResponseStatus);
		super.setMessage(message);
	}
	
	public  BasicResponse(RestApiResponseStatus restApiResponseStatus, String message) {
		super(restApiResponseStatus);
		super.setMessage(message);
	}

}
