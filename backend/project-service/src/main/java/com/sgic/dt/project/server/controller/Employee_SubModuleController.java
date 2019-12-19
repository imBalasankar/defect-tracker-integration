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
import com.sgic.dt.project.server.dto.Employee_SubModuleDTO;
import com.sgic.dt.project.server.dto.ModuleDTO;
import com.sgic.dt.project.server.dto.ProjectDTO;
import com.sgic.dt.project.server.dto.SubModuleDTO;
import com.sgic.dt.project.server.dto.TempDTO;
import com.sgic.dt.project.server.entities.Employee_SubModule;
import com.sgic.dt.project.server.entities.Module;
import com.sgic.dt.project.server.entities.Project;
import com.sgic.dt.project.server.entities.SubModule;
import com.sgic.dt.project.server.services.Employee_SubModuleService;
import com.sgic.dt.project.server.services.ModuleService;
import com.sgic.dt.project.server.services.ProjectService;
import com.sgic.dt.project.server.services.SubModuleService;
import com.sgic.dt.project.server.util.ErrorCodes;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class Employee_SubModuleController {
	@Autowired
	Employee_SubModuleService employee_SubModuleService;
	
	@Autowired
	SubModuleService subModuleService;
	
	@Autowired
	ProjectService projectService;
	
	@Autowired
	ModuleService moduleService;
	
	@Autowired
	ErrorCodes errorMessages;

	@Autowired
	private Mapper mapper;
	
	
	//=============== ADD A Employee_SubModule =================================================//
	
	private static boolean checkAvailability(String uri)
	{	     
	    RestTemplate restTemplate = new RestTemplate();
	    boolean result = restTemplate.getForObject(uri, Boolean.class);
	    return result;
	}
	
	@PostMapping(value = "/employee_submodule")
	public ResponseEntity<Object> createEmployee_SubModule(@RequestBody Employee_SubModuleDTO employee_SubModuleDTO)
	{
		if(employee_SubModuleService.isEmployeeIdExist(employee_SubModuleDTO.getEmployeeId())) {
			List<Employee_SubModule> employee_subModuleList = employee_SubModuleService.getAllByEmployeeId(employee_SubModuleDTO.getEmployeeId());
			for(Employee_SubModule employee_subModule : employee_subModuleList) {
				if(employee_subModule.getSubModuleId()==employee_SubModuleDTO.getSubModuleId()) {
					return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.SAF_SAME), HttpStatus.BAD_REQUEST);
				}
			}
		}
		
		if(checkAvailability("http://localhost:1724/api/v1/employee/allocate/SUB"+employee_SubModuleDTO.getEmployeeId())) {
			Employee_SubModule employee_SubModule = mapper.map(employee_SubModuleDTO, Employee_SubModule.class);		
			employee_SubModuleService.createEmployee_SubModule(employee_SubModule);
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.ALLOCATED), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.SAF_MAXIMUM), HttpStatus.BAD_REQUEST);
		}
	}
	
	//=============== GET ALL Employee_SubModules ===============================//
	@GetMapping(value = "/employee_submodule")
	  public ResponseEntity<Object> getEmployee_SubModules() 
	{
		List <Employee_SubModule> employee_SubModuleList = employee_SubModuleService.getAllEmployee_SubModules();
		List<Employee_SubModuleDTO> employee_SubModuleDTOList = mapper.map(employee_SubModuleList, Employee_SubModuleDTO.class);
		for(Employee_SubModuleDTO employee_SubModuleDTO_Object : employee_SubModuleDTOList)
		{
			SubModule subModule = subModuleService.getSubModuleById(employee_SubModuleDTO_Object.getSubModuleId());
			
			employee_SubModuleDTO_Object.setSubModuleName(subModule.getName());
			Module module = moduleService.getModuleById(subModule.getModuleId());
			employee_SubModuleDTO_Object.setModuleName(module.getName());
			Project project = projectService.getProjectById(module.getProjectId());
			employee_SubModuleDTO_Object.setProjectId(project.getId());
			employee_SubModuleDTO_Object.setProjectName(project.getName());
			
			final String url = "http://localhost:1724/api/v1/employee/dto/"+employee_SubModuleDTO_Object.getEmployeeId();
		    RestTemplate restTemplate = new RestTemplate();
		    TempDTO tempDTO = restTemplate.getForObject(url, TempDTO.class);
		    employee_SubModuleDTO_Object.setEmployeeFirstName(tempDTO.getFirstName());
		    employee_SubModuleDTO_Object.setEmployeeLastName(tempDTO.getLastName());
			
		}
		return new ResponseEntity<>(new ListContentResponse<Employee_SubModuleDTO>("List",employee_SubModuleDTOList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	//=============== GET A Employee_SubModule BY ID =====================================//
	@GetMapping(value = "/employee_submodule/{id}")
	public ResponseEntity<Object> getEmployee_SubModuleById(@PathVariable Long id)
	{
		Employee_SubModule employee_SubModule = employee_SubModuleService.getEmployee_SubModuleById(id);
		Employee_SubModuleDTO employee_SubModuleDTO = mapper.map(employee_SubModule, Employee_SubModuleDTO.class);
		
		
		return new ResponseEntity<>(new ContentResponse<Employee_SubModuleDTO>("Object", employee_SubModuleDTO, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
		
	}
	
	//=============== GET ALL Employee_Project with Module and submodule details ===============================//
		@GetMapping(value = "/employee_project_module")
		  public ResponseEntity<Object> getEmployee_Projects_Module() 
		{
			List <Employee_SubModule> employee_SubModuleList = employee_SubModuleService.getAllEmployee_SubModules();
			List<Employee_SubModuleDTO> employee_SubModuleDTOList = mapper.map(employee_SubModuleList, Employee_SubModuleDTO.class);
			for(Employee_SubModuleDTO employee_SubModuleDTO_Object : employee_SubModuleDTOList)
			{
				SubModule subModule = subModuleService.getSubModuleById(employee_SubModuleDTO_Object.getSubModuleId());
				employee_SubModuleDTO_Object.setSubModuleName(subModule.getName());
				employee_SubModuleDTO_Object.setProjectId(subModule.getProjectId());
				
				Project project = projectService.getProjectById(subModule.getProjectId());
				employee_SubModuleDTO_Object.setProjectName(project.getName());
				
			}

			return new ResponseEntity<>(new ListContentResponse<Employee_SubModuleDTO>("List",employee_SubModuleDTOList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
		}
	
	//=============== UPDATE Employee_SubModule ============================================================//
	@PutMapping(value = "/employee_submodule")
	public ResponseEntity<Object> updateEmployee_SubModule(@RequestBody Employee_SubModuleDTO employee_SubModuleDTO)
	{
		Employee_SubModule employee_SubModule = mapper.map(employee_SubModuleDTO, Employee_SubModule.class);
		
		employee_SubModuleService.updateEmployee_SubModule(employee_SubModule);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.UPDATED), HttpStatus.OK);
	}
	
	//=============== DELETE Employee_SubModule BY ID =========================//
	@DeleteMapping(value = "/employee_submodule/{id}")
	public ResponseEntity<Object> deleteEmployee_SubModule(@PathVariable Long id) {
		Employee_SubModule employee_SubModule = employee_SubModuleService.getEmployee_SubModuleById(id);
		checkAvailability("http://localhost:1724/api/v1/employee/deallocate/SUB"+employee_SubModule.getEmployeeId());
		employee_SubModuleService.deleteEmployee_SubModule(id);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DE_ALLOCATED), HttpStatus.OK);
	}
	
	@GetMapping(value = "/employee_submodule/employees/{id}")
	public ResponseEntity<Object> getEmployees(@PathVariable Long id) 
	{
		List<TempDTO> tempDTOList = new ArrayList<>();
		List <Employee_SubModule> employee_subModuleList = employee_SubModuleService.getAllBySubModuleId(id);
		List<Employee_SubModuleDTO> employee_subModuleDTOList = mapper.map(employee_subModuleList, Employee_SubModuleDTO.class);
		for(Employee_SubModuleDTO employee_subModuleDTO_Object : employee_subModuleDTOList)
		{
			final String url = "http://localhost:1724/api/v1/employee/dto/"+employee_subModuleDTO_Object.getEmployeeId();
			RestTemplate restTemplate = new RestTemplate();
			TempDTO tempDTO = restTemplate.getForObject(url, TempDTO.class);
			tempDTOList.add(tempDTO);   
		}

		return new ResponseEntity<>(new ListContentResponse<TempDTO>("List",tempDTOList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	@GetMapping(value = "/employee_submodule/projects")
	public ResponseEntity<Object> getProjects() 
	{
		List<Project> projectList=new ArrayList<>();
		List <Employee_SubModule> employee_subModuleList = employee_SubModuleService.getAllEmployee_SubModules();
		List<Employee_SubModuleDTO> employee_subModuleDTOList = mapper.map(employee_subModuleList, Employee_SubModuleDTO.class);
		for(Employee_SubModuleDTO employee_subModuleDTO_Object : employee_subModuleDTOList)
		{
			Project project = projectService.getProjectById(employee_subModuleDTO_Object.getProjectId());
			if(!projectList.contains(project)) {
				projectList.add(project);
				System.out.println("Hiiiiiiiiiiiii");
			}
		}
		List<ProjectDTO> projectDtoList = mapper.map(projectList, ProjectDTO.class);
		return new ResponseEntity<>(new ListContentResponse<ProjectDTO>("List",projectDtoList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	@GetMapping(value = "/employee_submodule/modules/{pid}")
	public ResponseEntity<Object> getModules(@PathVariable Long pid) 
	{
		List<Module> moduleList=new ArrayList<>();
		List <Employee_SubModule> employee_subModuleList = employee_SubModuleService.getAllByProjectId(pid);
		List<Employee_SubModuleDTO> employee_subModuleDTOList = mapper.map(employee_subModuleList, Employee_SubModuleDTO.class);
		for(Employee_SubModuleDTO employee_subModuleDTO_Object : employee_subModuleDTOList)
		{
			Module module = moduleService.getModuleById(employee_subModuleDTO_Object.getModuleId());
			if(!moduleList.contains(module)) {
				moduleList.add(module);
			}
		}
		List<ModuleDTO> moduleDtoList = mapper.map(moduleList, ModuleDTO.class);
		return new ResponseEntity<>(new ListContentResponse<ModuleDTO>("List",moduleDtoList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	@GetMapping(value = "/employee_submodule/submodules/{mid}")
	public ResponseEntity<Object> getSubModules(@PathVariable Long mid) 
	{
		List<SubModule> subModuleList=new ArrayList<>();
		List <Employee_SubModule> employee_subModuleList = employee_SubModuleService.getAllByModuleId(mid);
		List<Employee_SubModuleDTO> employee_subModuleDTOList = mapper.map(employee_subModuleList, Employee_SubModuleDTO.class);
		for(Employee_SubModuleDTO employee_subModuleDTO_Object : employee_subModuleDTOList)
		{
			SubModule subModule = subModuleService.getSubModuleById(employee_subModuleDTO_Object.getSubModuleId());
			if(!subModuleList.contains(subModule)) {
				subModuleList.add(subModule);
			}
		}
		List<SubModuleDTO> subModuleDtoList = mapper.map(subModuleList, SubModuleDTO.class);
		return new ResponseEntity<>(new ListContentResponse<SubModuleDTO>("List",subModuleDtoList, RestApiResponseStatus.RECEIVED), HttpStatus.OK);
	}
	
	//Check whether an Id exist on a Employee_SubModule
	@GetMapping(value = "/employee_submodule/exist/{sid}")
	public boolean isIdExist(@PathVariable String sid)
	{
		if(sid.startsWith("EMP")) {
			String str=sid.substring(3);
			long id=Long.valueOf(str);
			return employee_SubModuleService.isEmployeeIdExist(id);
		}
		else {
			return false;
		}

	}	
	
}
