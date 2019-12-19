package com.sgic.dt.project.server.controller;

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
import com.sgic.dt.project.dto.mapper.Mapper;
import com.sgic.dt.project.server.dto.ModuleDTO;
import com.sgic.dt.project.server.entities.Module;
import com.sgic.dt.project.server.entities.Project;
import com.sgic.dt.project.server.services.ModuleService;
import com.sgic.dt.project.server.services.ProjectService;
import com.sgic.dt.project.server.services.SubModuleService;
import com.sgic.dt.project.server.util.ErrorCodes;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ModuleController {
	@Autowired
	ModuleService moduleService;
	
	@Autowired
	ProjectService projectService;
	
	@Autowired
	SubModuleService subModuleService;
	
	@Autowired
	ErrorCodes errorMessages;

	@Autowired
	private Mapper mapper;
	
	
	//=============== ADD A MODULE =================================================//
	@PostMapping(value = "/module")
	public ResponseEntity<Object> createModule(@RequestBody ModuleDTO moduleDTO)
	{
		Module module = mapper.map(moduleDTO, Module.class);
		moduleService.createModule(module);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.CREATED), HttpStatus.CREATED);
	}
	
	//=============== GET ALL MODULES ===============================//
	@GetMapping(value = "/module")
	  public ResponseEntity<Object> getModules() 
	{
		
		List <Module> moduleList = moduleService.getAllModules();
		List<ModuleDTO> moduleDTOList = mapper.map(moduleList, ModuleDTO.class);
		for(ModuleDTO moduleDTO_Object : moduleDTOList)
		{
			Project project = projectService.getProjectById(moduleDTO_Object.getProjectId());
			moduleDTO_Object.setProjectName(project.getName());
		}
		return new ResponseEntity<>(new ListContentResponse<ModuleDTO>("List",moduleDTOList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	//=============== GET A MODULE BY ID =====================================//
	@GetMapping(value = "/module/{id}")
	public ResponseEntity<Object> getModuleById(@PathVariable Long id)
	{
		Module module = moduleService.getModuleById(id);
		
		ModuleDTO moduleDTO = mapper.map(module, ModuleDTO.class);
		return new ResponseEntity<>(new ContentResponse<ModuleDTO>("Object", moduleDTO, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
		
	}
	
	//=============== UPDATE MODULE ============================================================//
	@PutMapping(value = "/module")
	public ResponseEntity<Object> updateModule(@RequestBody ModuleDTO moduleDTO)
	{
		Module module = mapper.map(moduleDTO, Module.class);
		moduleService.updateModule(module);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.UPDATED), HttpStatus.OK);
	}
	
	//=============== DELETE MODULE BY ID =========================//
	@DeleteMapping(value = "/module/{id}")
	public ResponseEntity<Object> deleteModule(@PathVariable Long id) {
		if(!subModuleService.isModuleIdExist(id)) {
			moduleService.deleteModule(id);
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETED), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETION_FAILURE), HttpStatus.CONFLICT);
		}
	}
	
	//=============== TOTAL NUMBER OF MODULES =======================//
	@GetMapping(value = "/module/total")
	public Long getTotalModules() 
	{
		List <Module> moduleList = moduleService.getAllModules();
		Long totalNum=(long) moduleList.size();
		return totalNum;
	}
	
	//=============== GET ALL MODULES BY PROJECT ID ===============================//
	@GetMapping(value = "/module/byproject/{id}")
	  public ResponseEntity<Object> getALLModulesByProjectId(@PathVariable Long id) 
	{
		List <Module> moduleList = moduleService.getAllModulesByProjectId(id);
		List<ModuleDTO> moduleDTOList = mapper.map(moduleList, ModuleDTO.class);
		return new ResponseEntity<>(new ListContentResponse<ModuleDTO>("List",moduleDTOList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	//Get Module Name by Module Id
	@GetMapping(value = "/module/name/{id}")
	public String getModuleNameById(@PathVariable Long id)
	{
		Module module = moduleService.getModuleById(id);
		ModuleDTO moduleDto = mapper.map(module, ModuleDTO.class);
		String name = moduleDto.getName();	
		return name;
	}

}
