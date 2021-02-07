package it.cybsec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import it.cybsec.model.Film;


@Controller
public class ControllerView {
	
	@Autowired
	CaseProduttriciController caseprcontr;
	
	@Autowired
	FilmController filmcontr;
	
	@Autowired
	AttoriController attoricontr;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String viewCaseProduttrici(ModelMap caseproduttrici) {
		caseproduttrici.addAttribute("listCP", caseprcontr.findAll());
		System.out.println("asdasdasd");
		return "index";
	}
	
	@RequestMapping(value = "/selectcasaprod", method = RequestMethod.GET)
	public String viewCaseProduttriciSelect(ModelMap caseproduttrici) {
		caseproduttrici.addAttribute("listCP", caseprcontr.findAll());
		return "selectcasaprod";
	}
	
	@RequestMapping(value = "/updatecasaprod", method = RequestMethod.GET)
	public String modifyCasaProduttrici(@RequestParam(value="id") Integer id, ModelMap caseproduttrici) {
		caseproduttrici.addAttribute("casaproduttrice", caseprcontr.findById(id).get());
		return "modicasaprod";
	}
	
	@RequestMapping(value = "/selectfilmmod", method = RequestMethod.GET)
	public String viewFilmSelect(ModelMap film) {
		film.addAttribute("listF", filmcontr.findAll());
		return "selectfilmmod";
	}
	
	@RequestMapping(value = "/updatefilm", method = RequestMethod.GET)
	public String modifyFilm(@RequestParam(value="id") Integer id, ModelMap film) {
		Film filmlocal = filmcontr.findById(id);
		film.addAttribute("film", filmcontr.findById(id));
		film.addAttribute("listCP", caseprcontr.findAll());
		film.addAttribute("listA", attoricontr.findAll());
		film.addAttribute("casaproduttrice", filmlocal.getCaseProduttrici());
		return "modfilm";
	}
	
	@RequestMapping(value = "/selectattori", method = RequestMethod.GET)
	public String viewAttoriSelect(ModelMap attori) {
		attori.addAttribute("listA", attoricontr.findAll());
		return "selectattori";
	}
	
	@RequestMapping(value = "/updateattori", method = RequestMethod.GET)
	public String modifyAttori(@RequestParam(value="id") Integer id, ModelMap attori) {
		attori.addAttribute("attore", attoricontr.findById(id));
		return "modattore";
	}
	
	@RequestMapping(value = "/newcp", method = RequestMethod.GET)
	public String newCasaProduttrice() {
		return "newcp";
	}
	
	@RequestMapping(value = "/newat", method = RequestMethod.GET)
	public String newAttori() {
		return "newat";
	}
	
	@RequestMapping(value = "/newfilm", method = RequestMethod.GET)
	public String newFilm(ModelMap film) {
		film.addAttribute("listCP", caseprcontr.findAll());
		film.addAttribute("listA", attoricontr.findAll());
		return "newfi";
	}
	
	@RequestMapping(value = "/removecp", method = RequestMethod.GET)
	public String remCasaProduttrice(ModelMap caseproduttrici) {
		caseproduttrici.addAttribute("listCP", caseprcontr.findAll());
		return "selectrem_caseproduttrici";
	}
	
	@RequestMapping(value = "/removeattore", method = RequestMethod.GET)
	public String remAttore(ModelMap attori) {
		attori.addAttribute("listA", attoricontr.findAll());
		return "selectrem_attori";
	}
	
	@RequestMapping(value = "/removefilm", method = RequestMethod.GET)
	public String remFilm(ModelMap film) {
		film.addAttribute("listF", filmcontr.findAll());
		return "selectrem_film";
	}
	
}
