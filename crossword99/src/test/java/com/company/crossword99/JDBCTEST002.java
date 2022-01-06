package com.company.crossword99;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/root-context.xml"})
public class JDBCTEST002 {
	@Autowired
	private DataSource ds;
	
	@Test
	public void testDataSource() throws Exception {
		Connection conn = ds.getConnection();
		if(conn!=null) {
			System.out.println(".....dbcp연동완료: "+conn);
		}
	}
	
}
