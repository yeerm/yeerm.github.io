package com.company.mapper;

import java.util.List;

import com.company.dto.TitleDto;
import com.company.dto.WordDto;

public interface CrossWordMapper {
	
	//메인페이지 - 주제 리스트
	public List<TitleDto> searchTitle();
	
	//메인페이지 - 주제 방향별로 설명 가져오기
	public List<WordDto> searchTitle_info(int tno);
	
	//단어 가져오기 
	public List<WordDto> selectWord();
	
}
