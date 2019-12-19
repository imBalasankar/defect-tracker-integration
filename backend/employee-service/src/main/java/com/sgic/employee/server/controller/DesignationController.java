package com.sgic.employee.server.controller;

import java.util.List;

import javax.validation.Valid;

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
import com.sgic.employee.dto.mapper.Mapper;
import com.sgic.employee.server.dto.DesignationDto;
import com.sgic.employee.server.entities.Designation;
import com.sgic.employee.server.services.DesignationService;
import com.sgic.employee.server.services.EmployeeService;
import com.sgic.employee.server.util.ErrorCodes;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("/api/v1")
public class DesignationController {
	
	@Autowired
	private DesignationService designationservice;
	
	@Autowired
	private EmployeeService employeeservice;
	
	@Autowired
	ErrorCodes errorMessages;

	@Autowired
	private Mapper mapper;
	
	@PostMapping(value = "/designation")
	public ResponseEntity<Object> createDesignation(@RequestBody DesignationDto designationData){
		
		Designation designation = mapper.map(designationData, Designation.class);
		designationservice.createDesignation(designation);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.CREATED), HttpStatus.OK);	
		
	}
	
	// LIST ALL DESIGNATION ====================================================================================================

	@GetMapping(value = "/designation")
	public ResponseEntity<Object> getDesignation() {
		List<Designation> designationData = designationservice.getAllDesignation();
		List<DesignationDto> designationDtoData = mapper.map(designationData, DesignationDto.class);
		System.out.println(designationDtoData);
		return new ResponseEntity<>(new ListContentResponse<DesignationDto>("listAllDesignation",designationDtoData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}
	
	// LIST ALL DESIGNATION END ================================================================================================
	
	// GET DESIGNATION BY ID ===================================================================================================

	@GetMapping(value = "/designation/{id}")
	public ResponseEntity<Object> getDesignationById(@PathVariable Long id) {
		DesignationDto designationDtoData = mapper.map(designationservice.findDesignationById(id), DesignationDto.class);
		return new ResponseEntity<>(new ContentResponse<DesignationDto>("listDesignation", designationDtoData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}
	
	// GET DESIGNATION BY ID END ===============================================================================================
	
	// UPDATE DESIGNATION ======================================================================================================

	@PutMapping(value = "/designation")
	public ResponseEntity<Object> updateDesignation(@Valid @RequestBody DesignationDto designationData) {
		Designation designation = mapper.map(designationData, Designation.class);
		designationservice.updateDesignation(designation);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.UPDATED), HttpStatus.OK);
	}
	
	// UPDATE DESIGNATION END ==================================================================================================
	
	// DELETE DESIGNATION ======================================================================================================

	@DeleteMapping(value = "/designation/{id}")
	public ResponseEntity<Object> deleteDesignation(@PathVariable Long id) {
		if(!employeeservice.isDesignationIdExist(id)) {
			designationservice.deleteDesignation(id);
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETED), HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETION_FAILURE), HttpStatus.CONFLICT);
		}
	}
	
	// DELETE DESIGNATION END ==================================================================================================
	
	

}
