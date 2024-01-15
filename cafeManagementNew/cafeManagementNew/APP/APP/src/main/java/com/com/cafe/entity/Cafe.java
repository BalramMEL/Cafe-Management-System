package com.cafe.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "cafes")
public class Cafe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cafeId;

    private String name;
    private String email;
    private String password;
    private String role;
    
    

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
    private Address address;
    
    // Constructors, getters, setters, and other methods

    public Address getAddress() {
		return address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public int getCafeId() {
        return cafeId;
    }

    public void setCafeId(int cafeId) {
        this.cafeId = cafeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}