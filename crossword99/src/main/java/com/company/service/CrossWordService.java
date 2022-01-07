package com.company.service;

import java.util.List;

import com.company.dto.TitleDto;
import com.company.dto.WordDto;

public interface CrossWordService {
	//메인페이지로 퍼즐주제 가져오기 
	public List<TitleDto> searchTitle();
	
	//주제별 글자 설명 가져오기
	public List<WordDto> searchTitle_info(int tno);
	
	public List<WordDto> selectWord();
}
