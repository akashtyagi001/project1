package com.angular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.angular.model.Person;
import com.angular.services.PersonService;

@Controller
@CrossOrigin("http://localhost:4200")
public class HomeController {
	@Autowired
	private PersonService personservice;
	//@Autowired
	//HttpSession session;
	
	@ResponseBody
	@RequestMapping(value= "/",method=RequestMethod.GET)
	@CrossOrigin("http://localhost:4200")
	public List<Person> PersonList() {
     List<Person> li=personservice.getAllPersons();
		return li;

	}
	@RequestMapping(value= "/deletePerson/{pId}",method=RequestMethod.GET)
	@CrossOrigin("http://localhost:4200")
	@ResponseBody
	public boolean getallpersons(@PathVariable(name="pId")int pId)
	
{
	return personservice.deletePerson(pId);
}
	@PostMapping("/persons")
	public ResponseEntity<?> addPersonFunction(@RequestBody Person Obj){
		boolean b=personservice.addPerson(Obj);
		if(b)
		{
			return new ResponseEntity<String>("Success in addition of person ",HttpStatus.OK);
		}
		return new ResponseEntity<String>("ERROR in addition of person ",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}



