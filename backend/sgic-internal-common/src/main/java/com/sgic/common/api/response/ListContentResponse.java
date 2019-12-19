package com.sgic.common.api.response;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.sgic.common.api.enums.RestApiResponseStatus;

/**
 * Generic of API content response as a list
 */
public class ListContentResponse<T> extends ApiResponse {
  public ListContentResponse(RestApiResponseStatus restApiResponseStatus) {
    super(restApiResponseStatus);
  }

  private Map<String, List<T>> results = new HashMap<String, List<T>>();

  public ListContentResponse(String key, List<T> dto, RestApiResponseStatus restApiResponseStatus) {
	super(restApiResponseStatus);
	results.put(key, dto);
  }
  
  public Map<String, List<T>> getResults() {
	return results;
  }

  public void setResults(Map<String, List<T>> results) {
	this.results = results;
  }

}
