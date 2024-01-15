package com.cafe.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "addresses")
public class Address {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addressId;

	
    private String contactNo;
    private String city;
    private String street;
    private int pincode;
    
    @JsonIgnore
    @OneToOne(mappedBy="address")
    private Customer customer;
    
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "User_id")
//    private User user;
    
    @JsonIgnore
    @OneToOne(mappedBy="address")
    private Cafe cafe;

	public int getAddressId() {
		return addressId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Cafe getCafe() {
		return cafe;
	}

	public void setCafe(Cafe cafe) {
		this.cafe = cafe;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}

	
	

}
