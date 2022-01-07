package com.company.crossword99;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.company.mapper.TestMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/root-context.xml"})
public class JDBCTEST004_mapper {

	@Autowired
	private TestMapper testMapper;
	
	@Test
	public void testmapper() {
		System.out.println("....4:"+testMapper);
		System.out.println(".....4-1:"+testMapper.testmapper());
	}
	
}
