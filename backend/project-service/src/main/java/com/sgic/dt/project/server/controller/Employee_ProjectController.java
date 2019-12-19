package com.sgic.dt.project.server.controller;

import java.util.ArrayList;
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
import org.springframework.web.client.RestTemplate;

import com.sgic.common.api.enums.RestApiResponseStatus;
import com.sgic.common.api.response.ApiResponse;
import com.sgic.common.api.response.ContentResponse;
import com.sgic.common.api.response.ListContentResponse;
import com.sgic.dt.project.dto.mapper.Mapper;
import com.sgic.dt.project.server.dto.Employee_ProjectDTO;
import com.sgic.dt.project.server.dto.ProjectDTO;
import com.sgic.dt.project.server.dto.TempDTO;
import com.sgic.dt.project.server.entities.Employee_Project;
import com.sgic.dt.project.server.entities.Project;
import com.sgic.dt.project.server.entities.Role;
import com.sgic.dt.project.server.services.Employee_ProjectService;
import com.sgic.dt.project.server.services.Employee_SubModuleService;
import com.sgic.dt.project.server.services.ModuleService;
import com.sgic.dt.project.server.services.ProjectService;
import com.sgic.dt.project.server.services.RoleService;
import com.sgic.dt.project.server.services.SubModuleService;
import com.sgic.dt.project.server.util.ErrorCodes;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class Employee_ProjectController {
	@Autowired
	Employee_ProjectService employee_projectService;
	@Autowired
	ErrorCodes errorMessages;
	@Autowired
	ProjectService projectService;
	@Autowired
	RoleService roleService;
	@Autowired
	Employee_SubModuleService employee_SubModuleService;
	@Autowired
	ModuleService moduleService;
	@Autowired
	SubModuleService subModuleService;

	@Autowired
	private Mapper mapper;
	
	
	//=============== ADD A Employee_Project =================================================//
	
	private static boolean checkAvailability(String uri)
	{	     
	    RestTemplate restTemplate = new RestTemplate();
	    boolean result = restTemplate.getForObject(uri, Boolean.class);
	    return result;
	}
	
	@PostMapping(value = "/employee_project")
	public ResponseEntity<Object> createEmployee_Project(@RequestBody Employee_ProjectDTO employee_projectDTO)
	{
		if(employee_projectService.isEmployeeIdExist(employee_projectDTO.getEmployeeId())) {
			List<Employee_Project> employee_projectList = employee_projectService.getAllByEmployeeId(employee_projectDTO.getEmployeeId());
			for(Employee_Project employee_project : employee_projectList) {
				if(employee_project.getProjectId()==employee_projectDTO.getProjectId()) {
					return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.PAF_SAME), HttpStatus.BAD_REQUEST);
				}
			}
		}
		
		if(checkAvailability("http://localhost:1724/api/v1/employee/allocate/PRO"+employee_projectDTO.getEmployeeId())) {		
			Employee_Project employee_project = mapper.map(employee_projectDTO, Employee_Project.class);		
			employee_projectService.createEmployee_Project(employee_project);
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.ALLOCATED), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.PAF_MAXIMUM), HttpStatus.BAD_REQUEST);
		}
	}
	
	//=============== GET ALL Employee_Project ===============================//
	@GetMapping(value = "/employee_project")
	  public ResponseEntity<Object> getEmployee_Projects() 
	{
		List <Employee_Project> employee_projectList = employee_projectService.getAllEmployee_Projects();
		List<Employee_ProjectDTO> employee_projectDTOList = mapper.map(employee_projectList, Employee_ProjectDTO.class);
		for(Employee_ProjectDTO employee_projectDTO_Object : employee_projectDTOList)
		{
			Project project = projectService.getProjectById(employee_projectDTO_Object.getProjectId());
			employee_projectDTO_Object.setProjectName(project.getName());
			employee_projectDTO_Object.setProjectDescription(project.getDescription());
			employee_projectDTO_Object.setStatus(project.getStatus());
			
			Role role = roleService.getRoleById(employee_projectDTO_Object.getRoleId());
			employee_projectDTO_Object.setRoleName(role.getName());
			
			
			final String url = "http://localhost:1724/api/v1/employee/dto/"+employee_projectDTO_Object.getEmployeeId();
		    RestTemplate restTemplate = new RestTemplate();
		    TempDTO tempDTO = restTemplate.getForObject(url, TempDTO.class);
		    
		    employee_projectDTO_Object.setEmployeeFirstName(tempDTO.getFirstName());
		    employee_projectDTO_Object.setEmployeeLastName(tempDTO.getLastName());
		    employee_projectDTO_Object.setEmployeeName(tempDTO.getFirstName()+" "+tempDTO.getLastName());
		    employee_projectDTO_Object.setEmployeeDesignation(tempDTO.getDesignation());
		    employee_projectDTO_Object.setSubModuleAvailability(tempDTO.getSubModuleAvailability());
		    
		}
		
		return new ResponseEntity<>(new ListContentResponse<Employee_ProjectDTO>("List",employee_projectDTOList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	
	//=============== GET A Employee_Project BY ID =====================================//
	@GetMapping(value = "/employee_project/{id}")
	public ResponseEntity<Object> getEmployee_ProjectById(@PathVariable Long id)
	{
		Employee_Project employee_project = employee_projectService.getEmployee_ProjectById(id);
		Employee_ProjectDTO employee_projectDTO = mapper.map(employee_project, Employee_ProjectDTO.class);
		//return new ResponseEntity<Employee_ProjectDTO>(employee_projectDTO, HttpStatus.OK);
		return new ResponseEntity<>(new ContentResponse<Employee_ProjectDTO>("Object", employee_projectDTO, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
		
	}
	
	
	//=============== UPDATE Employee_Project ============================================================//
	@PutMapping(value = "/employee_project")
	public ResponseEntity<Object> updateEmployee_Project(@RequestBody Employee_ProjectDTO employee_projectDTO)
	{
		Employee_Project employee_project = mapper.map(employee_projectDTO, Employee_Project.class);
		employee_projectService.updateEmployee_Project(employee_project);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.UPDATED), HttpStatus.OK);
	}
	
	//=============== DELETE Employee_Project BY ID =========================//
	@DeleteMapping(value = "/employee_project/{id}")
	public ResponseEntity<Object> deleteEmployee_Project(@PathVariable Long id) {
		Employee_Project employee_project = employee_projectService.getEmployee_ProjectById(id);
		checkAvailability("http://localhost:1724/api/v1/employee/deallocate/PRO"+employee_project.getEmployeeId());
		employee_projectService.deleteById(id);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DE_ALLOCATED), HttpStatus.OK);
	}
	
	
	//=============== GET ALL BY PROJECT ID ===============================//
	@GetMapping(value = "/employee_project/byproject/{id}")
	  public ResponseEntity<Object> getALLByProjectId(@PathVariable Long id) 
	{
		List <Employee_Project> employee_projectList = employee_projectService.getAllByProjectId(id);
		
		List<Employee_ProjectDTO> employee_projectDTOList = mapper.map(employee_projectList, Employee_ProjectDTO.class);
		
		//return employee_projectDTOList;
		return new ResponseEntity<>(new ListContentResponse<Employee_ProjectDTO>("List",employee_projectDTOList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	@GetMapping(value = "/employee_project/projects")
	public ResponseEntity<Object> getProjects() 
	{
		List<Project> projectList=new ArrayList<>();
		List <Employee_Project> employee_projectList = employee_projectService.getAllEmployee_Projects();
		List<Employee_ProjectDTO> employee_projectDTOList = mapper.map(employee_projectList, Employee_ProjectDTO.class);
		for(Employee_ProjectDTO employee_projectDTO_Object : employee_projectDTOList)
		{
			Project project = projectService.getProjectById(employee_projectDTO_Object.getProjectId());
			projectList.add(project);	    
		}
		List<ProjectDTO> projectDtoList = mapper.map(projectList, ProjectDTO.class);
		return new ResponseEntity<>(new ListContentResponse<ProjectDTO>("List",projectDtoList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	//Check whether an Id exist on a Employee_Project
	@GetMapping(value = "/employee_project/exist/{sid}")
	public boolean isIdExist(@PathVariable String sid)
	{
		if(sid.startsWith("PRO")) {
			String str=sid.substring(3);
			long id=Long.valueOf(str);
			return employee_projectService.isProjectIdExist(id);
		}
		else if(sid.startsWith("EMP")) {
			String str=sid.substring(3);
			long id=Long.valueOf(str);
			return employee_projectService.isEmployeeIdExist(id);
		}
		else {
			return false;
		}

	}
	
}