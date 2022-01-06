package com.company.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.company.dto.WordDto;
import com.company.service.CrossWordService;

@Controller
@RequestMapping("/do/*")
public class CrossController {
	
	@Autowired
	private CrossWordService crosswordService;
	////메인페이지로 이동
	@RequestMapping(value="/main",method= {RequestMethod.GET})
	public String main_get(Model model) {
		model.addAttribute("title",crosswordService.searchTitle());
		return "/crossword/main";
	}
	
	///메인페이지에서 주제별로 글자 힌트 가져오기 
	@RequestMapping(value="/across",method= {RequestMethod.POST})
	@ResponseBody
	public List<WordDto> description_across(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		int tno = Integer.parseInt(request.getParameter("tno"));
		
		return crosswordService.searchTitle_info(tno);
	}
	////퍼즐만들기페이지 이동
	@RequestMapping(value="/make",method= {RequestMethod.GET})
	public String make_get() {
		return "/crossword/make";
	}
	
	//결과확인페이지 이동
	@RequestMapping(value="/register",method= {RequestMethod.GET})
	public String register_get() {
		return "/crossword/register";
	}
	
	@RequestMapping(value="/selectword", produces="application/json",method= {RequestMethod.GET})
	@ResponseBody
	public List<WordDto> selectword_get(){
		return crosswordService.selectWord();
	}
}
