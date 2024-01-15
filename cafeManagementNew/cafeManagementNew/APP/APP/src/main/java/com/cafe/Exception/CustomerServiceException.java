package com.cafe.Exception;

public class CustomerServiceException extends Exception {
	
	public CustomerServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public CustomerServiceException(String message) {
		super(message);
	}

}
