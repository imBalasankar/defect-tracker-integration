package com.sgic.dt.project.server.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

/**
 * contains custom error messages
 *
 */

@Component
@PropertySource("classpath:ErrorMessages.properties")
public class ErrorCodes {

  @Value("${validation.employee.notExists}")
  private String employeeNotExist;
  
  @Value("${validation.email.alreadyExist}")
  private String emailAlreadyExist;

public String getEmployeeNotExist() {
	return employeeNotExist;
}

public void setEmployeeNotExist(String employeeNotExist) {
	this.employeeNotExist = employeeNotExist;
}

public String getEmailAlreadyExist() {
	return emailAlreadyExist;
}

public void setEmailAlreadyExist(String emailAlreadyExist) {
	this.emailAlreadyExist = emailAlreadyExist;
}
}
