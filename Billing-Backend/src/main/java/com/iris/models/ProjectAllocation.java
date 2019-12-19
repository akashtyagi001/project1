package com.iris.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
@Entity
@Table(name="Allocation")
public class ProjectAllocation {
	@Id
	@GeneratedValue
	@Column(name="AllocId")
	private int allocId;
	
	@OneToOne
    @JoinColumn(name="EmployeeId")	
	Employee EmplObj;
	
	@OneToOne
	@JoinColumn(name="ConfigId")
	ProjectConfiguration ConfigObj;
	
	@Transient
	private int employeeId;
	
	@Transient
	private int projectId;
	
	@Transient
	private int roleId;
	
	@Transient
	private String location;
	
	
	public int getAllocId() {
		return allocId;
	}
	public void setAllocId(int allocId) {
		this.allocId = allocId;
	}
	public Employee getEmplObj() {
		return EmplObj;
	}
	public void setEmplObj(Employee emplObj) {
		EmplObj = emplObj;
	}
	public ProjectConfiguration getConfigObj() {
		return ConfigObj;
	}
	public void setConfigObj(ProjectConfiguration configObj) {
		ConfigObj = configObj;
	}
	
	
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public int getProjectId() {
		return projectId;
	}
	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	@Override
	public String toString() {
		return "ProjectAllocation [allocId=" + allocId + ", EmplObj=" + EmplObj + ", ConfigObj=" + ConfigObj + "]";
	}
}