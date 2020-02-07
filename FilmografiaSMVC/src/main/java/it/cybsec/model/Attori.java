package it.cybsec.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "attori")
public class Attori implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id_attori")
	private int id;

	@Column(name = "nome")
	private String nome;

	@Column(name = "cognome")
	private String cognome;

	@Column(name = "anno_nascita")
	private int annoNascita;

	@Column(name = "anno_inizio_carriera")
	private int annoInizioCarriera;

	@Column(name = "img")
	private String img;

	@JsonIgnoreProperties("attori")
	@ManyToMany(mappedBy = "attori", fetch = FetchType.EAGER)
	private List<Film> film;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public int getAnnoNascita() {
		return annoNascita;
	}

	public void setAnnoNascita(int annoNascita) {
		this.annoNascita = annoNascita;
	}

	public int getAnnoInizioCarriera() {
		return annoInizioCarriera;
	}

	public void setAnnoInizioCarriera(int annoInizioCarriera) {
		this.annoInizioCarriera = annoInizioCarriera;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public List<Film> getFilm() {
		return film;
	}

	public void setFilm(List<Film> film) {
		this.film = film;
	}
	
}
