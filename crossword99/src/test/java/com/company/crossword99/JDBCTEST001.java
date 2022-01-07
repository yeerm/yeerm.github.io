package com.company.crossword99;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Test;

public class JDBCTEST001 {
	
	//dbconnect 확인
	
	
	@Test
	public void testConnection() throws Exception{
		Class.forName("com.mysql.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/crossword?useSSL=false","root","1234");
		if(conn!=null) {
			System.out.println(".....1....:" + conn);
		}
	}
}
