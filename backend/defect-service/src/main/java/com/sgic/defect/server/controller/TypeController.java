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
import com.sgic.defect.server.dto.TypeDto;
import com.sgic.defect.server.entities.Type;
import com.sgic.defect.server.services.DefectService;
import com.sgic.defect.server.services.TypeService;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("/api/v1")
public class TypeController {

	@Autowired
	TypeService typeService;
	
	@Autowired
	DefectService defectService;

	@Autowired
	private Mapper mapper;

	//Add Type
	@PostMapping(value = "/type")
	public ResponseEntity<Object> createType(@RequestBody TypeDto typeData) {
		Type type = mapper.map(typeData, Type.class);
		typeService.addType(type);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.CREATED), HttpStatus.OK);	
	}
	
	//Get All Type
	@GetMapping(value = "/type")
	public ResponseEntity<Object> getAllType() {
		List<Type> type = typeService.getAllType();
		List<TypeDto> typeData = mapper.map(type, TypeDto.class);
		return new ResponseEntity<>(new ListContentResponse<TypeDto>("listAllType",typeData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}
	
	//Update Type
	@PutMapping(value = "/type")
	public ResponseEntity<Object> updateType(@RequestBody TypeDto typeData) {
		Type type = mapper.map(typeData, Type.class);
		typeService.addType(type);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.UPDATED), HttpStatus.OK);	
	}
	
	//Delete Type
	@DeleteMapping(value = "/type/{id}")
	public ResponseEntity<Object> removeType(@PathVariable Long id) {
		if(!defectService.isIdExist("TYP"+id)) {
			typeService.deleteType(id);
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETED), HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETION_FAILURE), HttpStatus.CONFLICT);
		}
	}	
	
	//Get Type By Id
	@GetMapping(value = "/type/{id}")
	public ResponseEntity<Object> getTypeById(@PathVariable Long id) {
		Type type = typeService.getTypeById(id);
		TypeDto typeData = mapper.map(type, TypeDto.class);
		return new ResponseEntity<>(new ContentResponse<TypeDto>("listType", typeData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}

}
