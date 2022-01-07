package com.company.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.mapper.TestMapper;

@Service
public class TestServiceImpl implements TestService{
	@Autowired
	private TestMapper testMapper;

	@Override
	public String testService() {
		// TODO Auto-generated method stub
		return testMapper.testmapper();
	}
	
	
	
}
