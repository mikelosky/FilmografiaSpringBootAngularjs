package it.cybsec.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="casa_produttrice")
public class CaseProduttrici implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "id_cas_prod")
	private int id;
	@Column(name = "nome")
	private String nome;
	@Column(name = "anno_fondazione")
	private int annoFondazione;
	@Column(name = "sede_principale")
	private String sedePrincipale;
	@Column(name = "img")
	private String img;
	
	@JsonIgnoreProperties("caseProduttrici")
	@OneToMany(mappedBy = "caseProduttrici", fetch = FetchType.EAGER)
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
	public int getAnnoFondazione() {
		return annoFondazione;
	}
	public void setAnnoFondazione(int annoFondazione) {
		this.annoFondazione = annoFondazione;
	}
	public String getSedePrincipale() {
		return sedePrincipale;
	}
	public void setSedePrincipale(String sedePrincipale) {
		this.sedePrincipale = sedePrincipale;
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
