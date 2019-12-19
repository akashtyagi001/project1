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
@Table(name="Attandance")
public class Operator {

	@Id
	@GeneratedValue
	@Column(name="AttId")
	private Integer attandanceId;
	
	
	@Column(name="Month")
	private String month;
	
	@Column(name=" Year")
	private Integer  year;
	
	//@Size(max=30,message="not more than 30")
	//@NotNull
	@Column(name=" fullDay")
	private Integer fullDay;
	
	//@Size(max=30,message="not more than 30")
	//@NotNull
	@Column(name=" HalfDay")
	private Integer  halfDay;
	
	@OneToOne
	@JoinColumn(name="EmployeeId")
	private Employee EmpObj;
	
	@OneToOne
	@JoinColumn(name="ProjectId")
	private Project ProjObj;
	
	@Transient
	private int projectId;
	
	@Transient
	private int employeeId;
	
	public Integer getAttandanceId() {
		return attandanceId;
	}
	public void setAttandanceId(Integer attandanceId) {
		this.attandanceId = attandanceId;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public Integer getFullDay() {
		return fullDay;
	}
	public void setFullDay(Integer fullDay) {
		this.fullDay = fullDay;
	}
	public Integer getHalfDay() {
		return halfDay;
	}
	public void setHalfDay(Integer halfDay) {
		this.halfDay = halfDay;
	}
	public Employee getEmpObj() {
		return EmpObj;
	}
	public void setEmpObj(Employee empObj) {
		EmpObj = empObj;
	}
	public Project getProjObj() {
		return ProjObj;
	}
	public void setProjObj(Project projObj) {
		ProjObj = projObj;
	}
	
	
	
	public int getProjectId() {
		return projectId;
	}
	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	@Override
	public String toString() {
		return "Operator [attandanceId=" + attandanceId + ", month=" + month + ", year=" + year + ", fullDay=" + fullDay
				+ ", halfDay=" + halfDay + ", EmpObj=" + EmpObj + ", ProjObj=" + ProjObj + ", projectId=" + projectId
				+ ", employeeId=" + employeeId + "]";
	}
	
	

}