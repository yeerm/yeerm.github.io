package com.company.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.company.dto.TitleDto;
import com.company.dto.WordDto;
import com.company.mapper.CrossWordMapper;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@Service
public class CrossWordServiceImpl implements CrossWordService{

	@Autowired
	private CrossWordMapper crosswordMapper;
	
	@Override
	public List<TitleDto> searchTitle() {
		// TODO Auto-generated method stub
		return crosswordMapper.searchTitle();
	}

	@Override
	public List<WordDto> searchTitle_info(int tno) {
		//좌표를 기준으로  가로힌트인지 세로힌트인지 판별
	
		
		//가로일 경우 -> (0,0) (1,0) (2,0) 시작좌표부터 마지막좌표까지 x가 계속 커짐
		//세로일 경우 -> (0,0),(0,1),(0,2) 시작좌표로부터 마지막좌표까지 y가 계속 커짐
		
		
		return crosswordMapper.searchTitle_info(tno);
	}

	@Override
	public List<WordDto> selectWord() {
		return crosswordMapper.selectWord();
	}

}
