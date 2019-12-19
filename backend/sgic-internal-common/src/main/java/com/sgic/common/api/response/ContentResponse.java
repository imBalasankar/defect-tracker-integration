package com.sgic.common.api.response;

import java.util.HashMap;
import java.util.Map;

import com.sgic.common.api.enums.RestApiResponseStatus;

/**
 * Generic of API content response
 *
 */
public class ContentResponse<T> extends ApiResponse {
	public ContentResponse(RestApiResponseStatus restApiResponseStatus) {
		super(restApiResponseStatus);
	}

	public ContentResponse() {
		super(RestApiResponseStatus.OK);
	}

	private Map<String, T> results = new HashMap<String, T>();

	public ContentResponse(String key, T dto, RestApiResponseStatus restApiResponseStatus) {
		super(restApiResponseStatus);
		results.put(key, dto);
	}

	public ContentResponse(T dto, RestApiResponseStatus restApiResponseStatus, String message) {
		super(restApiResponseStatus);
		super.setMessage(message);
	}

	public Map<String, T> getResults() {
		return results;
	}

	public void setResults(Map<String, T> results) {
		this.results = results;
	}

}
