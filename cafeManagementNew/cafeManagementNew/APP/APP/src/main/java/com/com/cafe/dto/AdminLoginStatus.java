package com.cafe.dto;

public class AdminLoginStatus extends Status{

	private int adminId;
	private String name;
	private String role;
	
	/*private Customer customer;

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}*/
	
	public int getAdminId() {
		return adminId;
	}
	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getCustomerId() {
		return adminId;
	}
	public void setCustomerId(int customerId) {
		this.adminId = customerId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
