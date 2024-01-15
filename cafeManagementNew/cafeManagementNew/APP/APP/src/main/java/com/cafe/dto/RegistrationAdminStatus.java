package com.cafe.dto;

public class RegistrationAdminStatus{
	private boolean status;
	private String message;
	private int Id;
	
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getId() {
		return Id;
	}
	public void setId(int Id) {
		this.Id = Id;
	}
	
	

}
