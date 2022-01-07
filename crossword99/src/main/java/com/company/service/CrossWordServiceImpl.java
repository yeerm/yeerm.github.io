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
		
		return crosswordMapper.searchTitle_info(tno);
	}

	@Override
	public List<WordDto> selectWord() {
		return crosswordMapper.selectWord();
	}

}
