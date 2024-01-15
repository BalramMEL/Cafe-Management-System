package com.cafe.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;



@Entity
@Table(name="category")
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int categoryId;
	private String name;
	private String Description;
	
	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	@JsonIgnore
	@OneToMany(mappedBy = "category")
	private List<Product> product;

	public int getCategoryId() {
		return categoryId;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

}
