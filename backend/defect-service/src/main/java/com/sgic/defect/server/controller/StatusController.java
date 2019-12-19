package com.sgic.defect.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sgic.common.api.enums.RestApiResponseStatus;
import com.sgic.common.api.response.ApiResponse;
import com.sgic.common.api.response.ContentResponse;
import com.sgic.common.api.response.ListContentResponse;
import com.sgic.defect.dto.mapper.Mapper;
import com.sgic.defect.server.dto.StatusDto;
import com.sgic.defect.server.entities.Status;
import com.sgic.defect.server.services.DefectService;
import com.sgic.defect.server.services.StatusService;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("/api/v1")
public class StatusController {
	@Autowired
	StatusService statusService;
	
	@Autowired
	DefectService defectService;

	@Autowired
	private Mapper mapper;

	//Add Status
	@PostMapping(value = "/status")
	public ResponseEntity<Object> createStatus(@RequestBody StatusDto statusData) {
		Status status = mapper.map(statusData, Status.class);
		statusService.addStatus(status);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.CREATED), HttpStatus.OK);	
	}
	
	//Get All Status
	@GetMapping(value = "/status")
	public ResponseEntity<Object> getAllStatus() {
		List<Status> status = statusService.getAllStatus();
		List<StatusDto> statusData = mapper.map(status, StatusDto.class);
		return new ResponseEntity<>(new ListContentResponse<StatusDto>("listAllStatus",statusData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}
	
	//Update Status
	@PutMapping(value = "/status")
	public ResponseEntity<Object> updateStatus(@RequestBody StatusDto statusData) {
		Status status = mapper.map(statusData, Status.class);
		statusService.addStatus(status);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.UPDATED), HttpStatus.OK);	
	}
	
	//Delete Status
	@DeleteMapping(value = "/status/{id}")
	public ResponseEntity<Object> removeStatus(@PathVariable Long id) {
		if(!defectService.isIdExist("STA"+id)) {
			statusService.deleteStatus(id);
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETED), HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETION_FAILURE), HttpStatus.CONFLICT);
		}
	}	
	
	//Get Status By Id
	@GetMapping(value = "/status/{id}")
	public ResponseEntity<Object> getStatusById(@PathVariable Long id) {
		Status status = statusService.getStatusById(id);
		StatusDto statusData = mapper.map(status, StatusDto.class);
		return new ResponseEntity<>(new ContentResponse<StatusDto>("listStatus", statusData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}
		
}
