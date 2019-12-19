package com.sgic.login.server.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sgic.common.api.enums.RestApiResponseStatus;
import com.sgic.common.api.response.ApiResponse;
import com.sgic.common.api.response.ListContentResponse;
import com.sgic.login.dto.mapper.Mapper;
import com.sgic.login.server.dto.RoleDto;
import com.sgic.login.server.entities.Role;
import com.sgic.login.server.entities.Users;
import com.sgic.login.server.services.RoleService;
import com.sgic.login.server.util.ErrorCodes;


@RestController
public class RoleController {
// get	
	@Autowired
	private RoleService roleService;
	
	@Autowired
	ErrorCodes errorMessages;

	@Autowired
	private Mapper mapper;
	
	  private static final Logger logger = Logger.getLogger(RoleController.class);

	  @GetMapping(value = "/role")
		public ResponseEntity<Object> getAllRole() {
			List<Role> role = roleService.getRole();
			List<RoleDto> roleData = mapper.map(role, RoleDto.class);
			return new ResponseEntity<>(new ListContentResponse<RoleDto>("gfsyvvjkju",roleData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	

		}
}
