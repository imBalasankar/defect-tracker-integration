package com.sgic.login.server.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sgic.common.api.enums.RestApiResponseStatus;
import com.sgic.common.api.response.ApiResponse;
import com.sgic.common.api.response.BasicResponse;
import com.sgic.common.api.response.ValidationFailure;
import com.sgic.login.dto.mapper.Mapper;
import com.sgic.login.server.dto.UsersDto;
import com.sgic.login.server.entities.Users;
import com.sgic.login.server.services.UsersProjectRoleService;
import com.sgic.login.server.util.Constants;
import com.sgic.login.server.util.ErrorCodes;
import com.sgic.login.server.util.ValidationMessages;

//get
@RestController
public class UsersProjectRoleController {
	
	@Autowired
	private UsersProjectRoleService userProjectRoleService;
	
	@Autowired
	ErrorCodes errorMessages;

	@Autowired
	private Mapper mapper;
	
	  private static final Logger logger = Logger.getLogger(UsersProjectRoleController.class);


	
	
}
