package com.sgic.defect.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.sgic.common.api.enums.RestApiResponseStatus;
import com.sgic.common.api.response.ApiResponse;
import com.sgic.common.api.response.ListContentResponse;
import com.sgic.defect.dto.mapper.Mapper;
import com.sgic.defect.server.dto.DefectLogDto;
import com.sgic.defect.server.entities.DefectLog;
import com.sgic.defect.server.entities.Status;
import com.sgic.defect.server.services.DefectLogService;
import com.sgic.defect.server.services.StatusService;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("/api/v1")
public class DefectLogController {

	@Autowired
	DefectLogService defectLogService;
	
	@Autowired
	StatusService statusService;
	
	@Autowired
	private Mapper mapper;

	//Add Defect Log
	@PostMapping(value = "/defect-log")
	public ResponseEntity<Object> createDefectLog(@RequestBody DefectLogDto defectLogData) {
		DefectLog defectLog = mapper.map(defectLogData, DefectLog.class);
		defectLogService.addDefectLog(defectLog);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.CREATED), HttpStatus.OK);	
	}
	
	private static String getName(String uri)
	{	     
	    RestTemplate restTemplate = new RestTemplate();
	    String name = restTemplate.getForObject(uri, String.class);
	    return name;
	}
	
	//Get All Defect Log
	@GetMapping(value = "/defect-log")
	public ResponseEntity<Object> getAllDefectLog() {
		List<DefectLog> defectLog = defectLogService.getAllDefectLog();
		List<DefectLogDto> defectLogData = mapper.map(defectLog, DefectLogDto.class);
		
		for(DefectLogDto defectLogDto : defectLogData)
		{
			defectLogDto.setAssignedToName(getName("http://localhost:1724/api/v1/employee/name/"+defectLogDto.getAssignedTo()));
			
			defectLogDto.setAssignedByName(getName("http://localhost:1724/api/v1/employee/name/"+defectLogDto.getAssignedBy()));
			
			defectLogDto.setCreatedByName(getName("http://localhost:1724/api/v1/employee/name/"+defectLogDto.getCreatedBy()));
			
			defectLogDto.setUpdatedByName(getName("http://localhost:1724/api/v1/employee/name/"+defectLogDto.getUpdatedBy()));
			
			Status status = statusService.getStatusById(defectLogDto.getStatusId());
			defectLogDto.setStatusName(status.getName());
		}
		return new ResponseEntity<>(new ListContentResponse<DefectLogDto>("listAllDefectLog",defectLogData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}
}
